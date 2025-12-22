package com.irms.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.irms.common.Result;
import com.irms.entity.Device;
import com.irms.entity.NetworkIp;
import com.irms.entity.NetworkMac;
import com.irms.service.IDeviceService;
import com.irms.service.INetworkService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@RestController
@RequestMapping("/biz/device")
@RequiredArgsConstructor
public class DeviceController {

    private final IDeviceService deviceService;
    private final INetworkService networkService;

    @GetMapping("/list")
    public Result<Page<Device>> list(@RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(required = false) String deviceName,
            @RequestParam(required = false) String ownerName,
            @RequestParam(required = false) String ipAddress,
            @RequestParam(required = false) Long deptId,
            @RequestParam(required = false) Integer minIpCount,
            @RequestParam(required = false) String fuzzy,
            @RequestParam(required = false) String ipAddress2,
            @RequestParam(required = false) Integer netType,
            @RequestParam(required = false) String macAddress,
            @RequestParam(required = false) Integer ipCount,
            @RequestParam(required = false) Long officeId) {
        return Result.success(deviceService.listDevices(new Page<>(pageNum, pageSize), deviceName, ownerName, ipAddress,
                deptId, minIpCount, fuzzy, ipAddress2, netType, macAddress, ipCount, officeId));
    }

    @GetMapping("/export")
    public void export(HttpServletResponse response,
            @RequestParam(required = false) String deviceName,
            @RequestParam(required = false) String ownerName,
            @RequestParam(required = false) String ipAddress,
            @RequestParam(required = false) Long deptId,
            @RequestParam(required = false) Integer minIpCount,
            @RequestParam(required = false) String fuzzy,
            @RequestParam(required = false) String ipAddress2,
            @RequestParam(required = false) Integer netType,
            @RequestParam(required = false) String macAddress,
            @RequestParam(required = false) Integer ipCount,
            @RequestParam(required = false) Long officeId) throws IOException {

        Page<Device> page = deviceService.listDevices(new Page<>(1, 10000), deviceName, ownerName, ipAddress, deptId,
                minIpCount, fuzzy, ipAddress2, netType, macAddress, ipCount, officeId);
        List<Device> list = page.getRecords();

        response.setContentType("application/vnd.ms-excel");
        response.setCharacterEncoding("utf-8");
        response.setHeader("Content-disposition", "attachment;filename=device_list.csv");

        PrintWriter writer = response.getWriter();
        writer.println("设备名称,设备编号,型号,责任人,归属部门,办公室,状态,网络信息(IP/MAC/类型),备注");
        for (Device d : list) {
            String owner = d.getOwner() != null ? d.getOwner().getNickName() : "";
            String dept = d.getDept() != null ? d.getDept().getDeptName() : "";
            String office = d.getOffice() != null ? d.getOffice().getOfficeName() : "";
            String status = "1".equals(d.getStatus()) ? "在用" : "其他";

            StringBuilder netInfo = new StringBuilder();
            // Fetch MACs for the device to construct the info string
            List<NetworkMac> macs = networkService.getMacsByDeviceId(d.getId());
            if (macs != null) {
                for (NetworkMac mac : macs) {
                    List<NetworkIp> ips = networkService.getIpsByDeviceId(d.getId()); // This is inefficient, better to
                                                                                      // fetch by MAC ID or restructure
                                                                                      // service
                    // Optimization: Filter IPs by MAC ID locally
                    List<NetworkIp> macIps = ips.stream()
                            .filter(ip -> mac.getId().equals(ip.getMacId()))
                            .collect(java.util.stream.Collectors.toList());

                    for (NetworkIp ip : macIps) {
                        String type = ip.getNetType() == 0 ? "内网" : "外网";
                        netInfo.append(ip.getIpAddress()).append(" (")
                                .append(mac.getMacAddress() == null ? "-" : mac.getMacAddress()).append(") [")
                                .append(type).append("]; ");
                    }
                    if (macIps.isEmpty()) {
                        netInfo.append("No IP").append(" (")
                                .append(mac.getMacAddress() == null ? "-" : mac.getMacAddress()).append("); ");
                    }
                }
            }

            writer.printf("%s,%s,%s,%s,%s,%s,%s,%s,%s%n",
                    d.getDeviceName(), d.getDeviceCode(), d.getModel(), owner, dept, office, status, netInfo.toString(),
                    d.getRemark());
        }
        writer.flush();
        writer.close();
    }

    @PostMapping
    public Result<Boolean> add(@RequestBody DeviceDTO dto) {
        deviceService.saveDevice(dto.getDevice(), dto.getMacs());
        return Result.success(true);
    }

    @PutMapping
    public Result<Boolean> update(@RequestBody DeviceDTO dto) {
        deviceService.updateDevice(dto.getDevice(), dto.getMacs());
        return Result.success(true);
    }

    @DeleteMapping("/{id}")
    public Result<Boolean> delete(@PathVariable Long id) {
        deviceService.removeDevice(id);
        return Result.success(true);
    }

    @GetMapping("/{id}")
    public Result<DeviceDTO> getInfo(@PathVariable Long id) {
        Device device = deviceService.getById(id);
        if (device != null) {
            // Populate related info
            if (device.getOwnerId() != null) {
                device.setOwner(deviceService.getOwnerById(device.getOwnerId()));
            }
            if (device.getDeptId() != null) {
                device.setDept(deviceService.getDeptById(device.getDeptId()));
            }
            if (device.getOfficeId() != null) {
                device.setOffice(deviceService.getOfficeById(device.getOfficeId()));
            } else if (device.getOwner() != null && device.getOwner().getOfficeId() != null) {
                // Fallback to owner's office
                device.setOffice(deviceService.getOfficeById(device.getOwner().getOfficeId()));
            }
        }

        List<NetworkMac> macs = networkService.getMacsByDeviceId(id);
        List<NetworkIp> ips = networkService.getIpsByDeviceId(id);

        if (device != null) {
            device.setNetworkIps(ips);
        }

        // Nest IPs into MACs
        if (macs != null) {
            for (NetworkMac mac : macs) {
                List<NetworkIp> macIps = ips.stream()
                        .filter(ip -> mac.getId().equals(ip.getMacId()))
                        .collect(java.util.stream.Collectors.toList());
                mac.setIps(macIps);
            }
        }

        DeviceDTO dto = new DeviceDTO();
        dto.setDevice(device);
        dto.setMacs(macs);

        return Result.success(dto);
    }

    @Data
    public static class DeviceDTO {
        private Device device;
        private List<NetworkMac> macs;
    }

    @Data
    public static class UserDevicesDTO {
        private Long userId;
        private List<DeviceDTO> devices;
    }

    @GetMapping("/user/{userId}")
    public Result<List<DeviceDTO>> getByUserId(@PathVariable Long userId) {
        List<Device> devices = deviceService
                .list(new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Device>()
                        .eq(Device::getOwnerId, userId));
        List<DeviceDTO> dtos = new java.util.ArrayList<>();
        for (Device d : devices) {
            dtos.add(getInfo(d.getId()).getData());
        }
        return Result.success(dtos);
    }

    @PostMapping("/batch")
    @Transactional
    public Result<Boolean> batchSave(@RequestBody UserDevicesDTO dto) {
        // 1. Get existing devices for this user
        List<Device> existing = deviceService
                .list(new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Device>()
                        .eq(Device::getOwnerId, dto.getUserId()));
        java.util.Set<Long> newIds = dto.getDevices().stream()
                .map(d -> d.getDevice().getId())
                .filter(java.util.Objects::nonNull)
                .collect(java.util.stream.Collectors.toSet());

        // 2. Delete devices that are not in the new list
        for (Device e : existing) {
            if (!newIds.contains(e.getId())) {
                deviceService.removeDevice(e.getId());
            }
        }

        // 3. Save or Update current list
        for (DeviceDTO d : dto.getDevices()) {
            d.getDevice().setOwnerId(dto.getUserId());
            if (d.getDevice().getId() == null) {
                deviceService.saveDevice(d.getDevice(), d.getMacs());
            } else {
                deviceService.updateDevice(d.getDevice(), d.getMacs());
            }
        }
        return Result.success(true);
    }
}
