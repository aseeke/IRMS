package com.irms.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.irms.entity.Device;
import com.irms.entity.NetworkIp;
import com.irms.entity.NetworkMac;
import com.irms.mapper.DeviceMapper;
import com.irms.service.IDeviceService;
import com.irms.service.INetworkService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DeviceServiceImpl extends ServiceImpl<DeviceMapper, Device> implements IDeviceService {

    private final com.irms.mapper.UserMapper userMapper;
    private final com.irms.mapper.NetworkIpMapper networkIpMapper;
    private final com.irms.mapper.NetworkMacMapper networkMacMapper;
    private final com.irms.mapper.DeptMapper deptMapper;
    private final com.irms.mapper.OfficeMapper officeMapper;
    private final INetworkService networkService;

    @Override
    @Transactional
    public void saveDevice(Device device, List<NetworkMac> macs) {
        checkIpUnique(macs, null);
        this.save(device);
        networkService.saveNetworkInfo(device.getId(), macs);
    }

    @Override
    @Transactional
    public void updateDevice(Device device, List<NetworkMac> macs) {
        checkIpUnique(macs, device.getId());
        this.updateById(device);
        networkService.saveNetworkInfo(device.getId(), macs);
    }

    @Override
    @Transactional
    public void removeDevice(Long id) {
        this.removeById(id);
        networkService.saveNetworkInfo(id, null);
    }

    @Override
    public com.baomidou.mybatisplus.extension.plugins.pagination.Page<Device> listDevices(
            com.baomidou.mybatisplus.extension.plugins.pagination.Page<Device> page,
            String deviceName, String ownerName, String ipAddress, Long deptId, Integer minIpCount,
            String fuzzy, String ipAddress2, Integer netType, String macAddress, Integer ipCount, Long officeId) {

        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Device> wrapper = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();

        // 1. Basic & Exact Fields
        wrapper.eq(deptId != null, Device::getDeptId, deptId);
        if (officeId != null) {
            List<Long> userIdsInOffice = userMapper.selectList(
                    new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<com.irms.entity.User>()
                            .eq(com.irms.entity.User::getOfficeId, officeId)
                            .select(com.irms.entity.User::getId))
                    .stream().map(com.irms.entity.User::getId).collect(java.util.stream.Collectors.toList());

            wrapper.and(w -> w.eq(Device::getOfficeId, officeId)
                    .or(!userIdsInOffice.isEmpty(), ow -> ow.in(Device::getOwnerId, userIdsInOffice)));
        }

        // 2. Fuzzy Search (Multiple Fields)
        if (fuzzy != null && !fuzzy.isEmpty()) {
            wrapper.and(w -> w
                    .like(Device::getDeviceName, fuzzy)
                    .or()
                    .like(Device::getModel, fuzzy)
                    .or()
                    .like(Device::getRemark, fuzzy)
                    .or()
                    .like(Device::getDeviceCode, fuzzy));
        } else {
            // Specific match if fuzzy not used
            wrapper.like(deviceName != null && !deviceName.isEmpty(), Device::getDeviceName, deviceName);
        }

        // 3. Owner Name Filter
        if (ownerName != null && !ownerName.isEmpty()) {
            List<Long> userIds = userMapper.selectList(
                    new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<com.irms.entity.User>()
                            .like(com.irms.entity.User::getNickName, ownerName)
                            .or()
                            .like(com.irms.entity.User::getUserName, ownerName)
                            .select(com.irms.entity.User::getId))
                    .stream().map(com.irms.entity.User::getId).collect(java.util.stream.Collectors.toList());

            if (userIds.isEmpty())
                return page;
            wrapper.in(Device::getOwnerId, userIds);
        }

        // 4. IP/MAC/NetType Filters
        List<Long> networkDeviceIds = null;
        boolean hasNetworkFilter = (ipAddress != null && !ipAddress.isEmpty())
                || (ipAddress2 != null && !ipAddress2.isEmpty())
                || (macAddress != null && !macAddress.isEmpty())
                || netType != null;

        if (hasNetworkFilter) {
            // Filter by MAC Address first (Device -> Mac)
            if (macAddress != null && !macAddress.isEmpty()) {
                List<NetworkMac> macs = networkMacMapper.selectList(
                        new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkMac>()
                                .like(NetworkMac::getMacAddress, macAddress)
                                .select(NetworkMac::getDeviceId));
                List<Long> macDeviceIds = macs.stream().map(NetworkMac::getDeviceId).distinct()
                        .collect(java.util.stream.Collectors.toList());

                networkDeviceIds = macDeviceIds;
            }

            // Filter by IP Address / NetType (Device -> Ip)
            if ((ipAddress != null && !ipAddress.isEmpty()) || netType != null) {
                com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkIp> ipQuery = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
                ipQuery.select(NetworkIp::getDeviceId);

                // Net Type
                ipQuery.eq(netType != null, NetworkIp::getNetType, netType);

                // IP Address 1
                if (ipAddress != null && !ipAddress.isEmpty()) {
                    String cleanIp = ipAddress.replaceAll("[xX]$", "");
                    ipQuery.likeRight(NetworkIp::getIpAddress, cleanIp);
                }

                List<NetworkIp> ips = networkIpMapper.selectList(ipQuery);
                List<Long> ipDeviceIds = ips.stream().map(NetworkIp::getDeviceId).distinct()
                        .collect(java.util.stream.Collectors.toList());

                if (networkDeviceIds == null)
                    networkDeviceIds = ipDeviceIds;
                else
                    networkDeviceIds.retainAll(ipDeviceIds);
            }

            // IP Address 2 (Intersection)
            if (ipAddress2 != null && !ipAddress2.isEmpty()) {
                com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkIp> ipQuery2 = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
                ipQuery2.select(NetworkIp::getDeviceId).like(NetworkIp::getIpAddress, ipAddress2);
                List<Long> ids2 = networkIpMapper.selectList(ipQuery2).stream().map(NetworkIp::getDeviceId)
                        .collect(java.util.stream.Collectors.toList());

                if (networkDeviceIds == null) {
                    networkDeviceIds = ids2;
                } else {
                    networkDeviceIds.retainAll(ids2);
                }
            }

            if (networkDeviceIds != null && networkDeviceIds.isEmpty())
                return page;

            if (networkDeviceIds != null)
                wrapper.in(Device::getId, networkDeviceIds);
        }

        // 5. IP Count Filter (Min or Exact) - Person Centric
        if ((minIpCount != null && minIpCount > 0) || (ipCount != null && ipCount > 0)) {
            // 5.1 Fetch All Devices to map deviceId to ownerId
            List<Device> devices = this
                    .list(new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Device>()
                            .select(Device::getId, Device::getOwnerId));
            java.util.Map<Long, Long> deviceToOwner = devices.stream()
                    .filter(d -> d.getOwnerId() != null)
                    .collect(java.util.stream.Collectors.toMap(Device::getId, Device::getOwnerId, (a, b) -> a));

            // 5.2 Fetch All Valid IPs
            List<NetworkIp> allIps = networkIpMapper
                    .selectList(new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkIp>()
                            .select(NetworkIp::getDeviceId, NetworkIp::getIpAddress)
                            .isNotNull(NetworkIp::getIpAddress)
                            .ne(NetworkIp::getIpAddress, ""));

            // 5.3 Count Distinct IPs per Person (Owner)
            java.util.Map<Long, java.util.Set<String>> personIpSets = new java.util.HashMap<>();
            for (NetworkIp ip : allIps) {
                Long ownerId = deviceToOwner.get(ip.getDeviceId());
                if (ownerId != null) {
                    personIpSets.computeIfAbsent(ownerId, k -> new java.util.HashSet<>())
                            .add(ip.getIpAddress());
                }
            }

            // 5.4 Identify Matching Owners
            java.util.Set<Long> matchingOwnerIds = new java.util.HashSet<>();
            personIpSets.forEach((ownerId, set) -> {
                int size = set.size();
                boolean match = false;
                if (ipCount != null && ipCount > 0) {
                    match = (size == ipCount.intValue());
                } else if (minIpCount != null && minIpCount > 0) {
                    match = (size >= minIpCount);
                }
                if (match) {
                    matchingOwnerIds.add(ownerId);
                }
            });

            // 5.5 Filter Devices by Matching Owners
            if (matchingOwnerIds.isEmpty()) {
                wrapper.eq(Device::getId, -1L); // No match
            } else {
                wrapper.in(Device::getOwnerId, matchingOwnerIds);
            }
        }

        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Device> result = this.page(page, wrapper);

        // Fill Owner and Dept info, and Network IPs/MACs
        List<Long> deviceIds = result.getRecords().stream().map(Device::getId)
                .collect(java.util.stream.Collectors.toList());

        if (!deviceIds.isEmpty()) {
            // 1. Fetch IPs
            List<NetworkIp> ips = networkIpMapper
                    .selectList(new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkIp>()
                            .in(NetworkIp::getDeviceId, deviceIds));
            java.util.Map<Long, java.util.List<NetworkIp>> ipMap = ips.stream()
                    .collect(java.util.stream.Collectors.groupingBy(NetworkIp::getDeviceId));

            // 2. Fetch MACs
            List<NetworkMac> macs = networkMacMapper
                    .selectList(new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkMac>()
                            .in(NetworkMac::getDeviceId, deviceIds));
            java.util.Map<Long, java.util.List<NetworkMac>> macMap = macs.stream()
                    .collect(java.util.stream.Collectors.groupingBy(NetworkMac::getDeviceId));

            // 3. Nest IPs into MACs and set to Device
            result.getRecords().forEach(d -> {
                if (d.getOwnerId() != null) {
                    d.setOwner(userMapper.selectById(d.getOwnerId()));
                }
                if (d.getDeptId() != null) {
                    d.setDept(deptMapper.selectById(d.getDeptId()));
                } else if (d.getOwner() != null && d.getOwner().getDeptId() != null) {
                    d.setDept(deptMapper.selectById(d.getOwner().getDeptId()));
                }
                if (d.getOfficeId() != null) {
                    d.setOffice(officeMapper.selectById(d.getOfficeId()));
                } else if (d.getOwner() != null && d.getOwner().getOfficeId() != null) {
                    d.setOffice(officeMapper.selectById(d.getOwner().getOfficeId()));
                }

                List<NetworkIp> deviceIps = ipMap.getOrDefault(d.getId(), java.util.Collections.emptyList());
                d.setNetworkIps(deviceIps); // Keep flat list for compatibility if needed

                List<NetworkMac> deviceMacs = macMap.getOrDefault(d.getId(), java.util.Collections.emptyList());
                deviceMacs.forEach(m -> {
                    List<NetworkIp> macIps = deviceIps.stream()
                            .filter(ip -> m.getId().equals(ip.getMacId()))
                            .collect(java.util.stream.Collectors.toList());
                    m.setIps(macIps);
                });
                d.setNetworkMacs(deviceMacs);
            });
        }

        return result;
    }

    @Override
    public com.irms.entity.User getOwnerById(Long id) {
        return userMapper.selectById(id);
    }

    @Override
    public com.irms.entity.Dept getDeptById(Long id) {
        return deptMapper.selectById(id);
    }

    @Override
    public com.irms.entity.Office getOfficeById(Long id) {
        return officeMapper.selectById(id);
    }

    private void checkIpUnique(List<NetworkMac> macs, Long currentDeviceId) {
        if (macs == null || macs.isEmpty())
            return;

        List<String> ipAddrs = new java.util.ArrayList<>();
        for (NetworkMac mac : macs) {
            if (mac.getIps() != null) {
                mac.getIps().forEach(ip -> {
                    if (ip.getIpAddress() != null && !ip.getIpAddress().isEmpty()) {
                        ipAddrs.add(ip.getIpAddress());
                    }
                });
            }
        }

        if (ipAddrs.isEmpty())
            return;

        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<NetworkIp> query = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
        query.in(NetworkIp::getIpAddress, ipAddrs);
        if (currentDeviceId != null) {
            query.ne(NetworkIp::getDeviceId, currentDeviceId);
        }
        Long count = networkIpMapper.selectCount(query);
        if (count > 0) {
            throw new RuntimeException("IP Address conflict detected!");
        }
    }
}
