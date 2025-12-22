package com.irms.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.irms.entity.Device;
import com.irms.entity.NetworkMac;

import java.util.List;

public interface IDeviceService extends IService<Device> {
    void saveDevice(Device device, List<NetworkMac> macs);

    void updateDevice(Device device, List<NetworkMac> macs);

    void removeDevice(Long id);

    com.baomidou.mybatisplus.extension.plugins.pagination.Page<Device> listDevices(
            com.baomidou.mybatisplus.extension.plugins.pagination.Page<Device> page,
            String deviceName, String ownerName, String ipAddress, Long deptId, Integer minIpCount,
            String fuzzy, String ipAddress2, Integer netType, String macAddress, Integer ipCount, Long officeId);

    com.irms.entity.User getOwnerById(Long id);

    com.irms.entity.Dept getDeptById(Long id);

    com.irms.entity.Office getOfficeById(Long id);
}
