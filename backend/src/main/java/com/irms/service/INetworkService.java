package com.irms.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.irms.entity.NetworkIp;
import com.irms.entity.NetworkMac;

import java.util.List;

public interface INetworkService extends IService<NetworkIp> {
    List<NetworkIp> getIpsByDeviceId(Long deviceId);

    List<NetworkMac> getMacsByDeviceId(Long deviceId);

    void saveNetworkInfo(Long deviceId, List<NetworkMac> macs);

    // Stats
    List<java.util.Map<String, Object>> getIpCountDistribution();

    // IP Usage: Subnet stats? Or just Used/Unused count?
    // Requirement: "192.168.1.x: Used 80%, Free 20%".
    // This implies grouping by subnet.
    List<java.util.Map<String, Object>> getIpUsageStats();
}
