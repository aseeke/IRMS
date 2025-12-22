package com.irms.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.irms.entity.NetworkIp;
import com.irms.entity.NetworkMac;
import com.irms.mapper.NetworkIpMapper;
import com.irms.mapper.NetworkMacMapper;
import com.irms.service.INetworkService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NetworkServiceImpl extends ServiceImpl<NetworkIpMapper, NetworkIp> implements INetworkService {

    private final NetworkMacMapper networkMacMapper;
    private final com.irms.mapper.DeviceMapper deviceMapper;

    @Override
    public List<NetworkIp> getIpsByDeviceId(Long deviceId) {
        return this.list(new LambdaQueryWrapper<NetworkIp>().eq(NetworkIp::getDeviceId, deviceId));
    }

    @Override
    public List<NetworkMac> getMacsByDeviceId(Long deviceId) {
        return networkMacMapper.selectList(new LambdaQueryWrapper<NetworkMac>().eq(NetworkMac::getDeviceId, deviceId));
    }

    @Override
    @Transactional
    public void saveNetworkInfo(Long deviceId, List<NetworkMac> macs) {
        // Clear old info
        this.remove(new LambdaQueryWrapper<NetworkIp>().eq(NetworkIp::getDeviceId, deviceId));
        networkMacMapper.delete(new LambdaQueryWrapper<NetworkMac>().eq(NetworkMac::getDeviceId, deviceId));

        if (macs != null) {
            for (NetworkMac mac : macs) {
                mac.setDeviceId(deviceId);
                networkMacMapper.insert(mac);

                if (mac.getIps() != null) {
                    mac.getIps().forEach(ip -> {
                        ip.setDeviceId(deviceId);
                        ip.setMacId(mac.getId());
                    });
                    this.saveBatch(mac.getIps());
                }
            }
        }
    }

    @Override
    public List<java.util.Map<String, Object>> getIpCountDistribution() {
        // 1. Fetch all Devices to map deviceId to ownerId
        List<com.irms.entity.Device> devices = deviceMapper.selectList(
                new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<com.irms.entity.Device>()
                        .select(com.irms.entity.Device::getId, com.irms.entity.Device::getOwnerId));
        java.util.Map<Long, Long> deviceToOwner = devices.stream()
                .filter(d -> d.getOwnerId() != null)
                .collect(java.util.stream.Collectors.toMap(com.irms.entity.Device::getId,
                        com.irms.entity.Device::getOwnerId, (a, b) -> a));

        // 2. Fetch all Valid IPs
        List<NetworkIp> ipList = this.list(new LambdaQueryWrapper<NetworkIp>()
                .select(NetworkIp::getDeviceId, NetworkIp::getIpAddress)
                .isNotNull(NetworkIp::getIpAddress)
                .ne(NetworkIp::getIpAddress, ""));

        // 3. Count Distinct IPs per Person (Owner)
        java.util.Map<Long, java.util.Set<String>> personIpSets = new java.util.HashMap<>();
        for (NetworkIp ip : ipList) {
            Long ownerId = deviceToOwner.get(ip.getDeviceId());
            if (ownerId != null) {
                personIpSets.computeIfAbsent(ownerId, k -> new java.util.HashSet<>()).add(ip.getIpAddress());
            }
        }

        // 4. Bucket Counts (Person Centric)
        long count1 = 0;
        long count2 = 0;
        long count3 = 0;
        long count4Plus = 0;

        for (java.util.Set<String> ips : personIpSets.values()) {
            int size = ips.size();
            if (size == 1)
                count1++;
            else if (size == 2)
                count2++;
            else if (size == 3)
                count3++;
            else if (size >= 4)
                count4Plus++;
        }

        List<java.util.Map<String, Object>> result = new java.util.ArrayList<>();

        java.util.Map<String, Object> map1 = new java.util.HashMap<>();
        map1.put("ipCount", "1");
        map1.put("deviceCount", count1); // Keeping key "deviceCount" for frontend compatibility, but it represents
                                         // people
        result.add(map1);

        java.util.Map<String, Object> map2 = new java.util.HashMap<>();
        map2.put("ipCount", "2");
        map2.put("deviceCount", count2);
        result.add(map2);

        java.util.Map<String, Object> map3 = new java.util.HashMap<>();
        map3.put("ipCount", "3");
        map3.put("deviceCount", count3);
        result.add(map3);

        java.util.Map<String, Object> map4 = new java.util.HashMap<>();
        map4.put("ipCount", ">=4");
        map4.put("deviceCount", count4Plus);
        result.add(map4);

        return result;
    }

    @Override
    public List<java.util.Map<String, Object>> getIpUsageStats() {
        // Fetch all IPs
        List<NetworkIp> list = this.list(new LambdaQueryWrapper<NetworkIp>().select(NetworkIp::getIpAddress));

        // Group by subnet (assuming /24 for simplicity: 192.168.1)
        java.util.Map<String, Long> subnetUsage = list.stream()
                .map(NetworkIp::getIpAddress)
                .filter(java.util.Objects::nonNull)
                .map(ip -> {
                    int lastDot = ip.lastIndexOf('.');
                    return lastDot > 0 ? ip.substring(0, lastDot) : "Unknown";
                })
                .collect(java.util.stream.Collectors.groupingBy(java.util.function.Function.identity(),
                        java.util.stream.Collectors.counting()));

        List<java.util.Map<String, Object>> result = new java.util.ArrayList<>();
        subnetUsage.forEach((subnet, count) -> {
            java.util.Map<String, Object> map = new java.util.HashMap<>();
            map.put("subnet", subnet + ".x");
            map.put("used", count);
            map.put("total", 254); // Assume /24
            map.put("usageRate", String.format("%.1f", (count / 254.0) * 100));
            result.add(map);
        });
        return result;
    }
}
