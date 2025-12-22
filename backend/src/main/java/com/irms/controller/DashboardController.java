package com.irms.controller;

import com.irms.common.Result;
import com.irms.service.IDeviceService;
import com.irms.service.INetworkService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final IDeviceService deviceService;
    private final INetworkService networkService;

    @GetMapping("/stats")
    public Result<Map<String, Object>> getStats() {
        Map<String, Object> stats = new HashMap<>();

        // 1. Total Devices
        long deviceCount = deviceService.count();
        stats.put("deviceCount", deviceCount);

        // 2. IP Usage Stats
        List<Map<String, Object>> ipUsage = networkService.getIpUsageStats();
        stats.put("ipUsage", ipUsage);

        // 3. Device IP Binding Distribution
        List<Map<String, Object>> ipBindingDist = networkService.getIpCountDistribution();
        stats.put("ipBindingDist", ipBindingDist);

        return Result.success(stats);
    }
}
