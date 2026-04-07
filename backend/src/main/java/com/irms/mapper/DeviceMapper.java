package com.irms.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.irms.entity.Device;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeviceMapper extends BaseMapper<Device> {

    @org.apache.ibatis.annotations.Select("SELECT d.owner_id FROM biz_network_ip ip " +
            "JOIN biz_device d ON ip.device_id = d.id " +
            "WHERE ip.ip_address IS NOT NULL AND ip.ip_address != '' " +
            "GROUP BY d.owner_id " +
            "HAVING COUNT(DISTINCT ip.ip_address) = #{ipCount}")
    java.util.List<Long> findOwnerIdsByExactIpCount(@org.apache.ibatis.annotations.Param("ipCount") Integer ipCount);

    @org.apache.ibatis.annotations.Select("SELECT d.owner_id FROM biz_network_ip ip " +
            "JOIN biz_device d ON ip.device_id = d.id " +
            "WHERE ip.ip_address IS NOT NULL AND ip.ip_address != '' " +
            "GROUP BY d.owner_id " +
            "HAVING COUNT(DISTINCT ip.ip_address) >= #{minIpCount}")
    java.util.List<Long> findOwnerIdsByMinIpCount(@org.apache.ibatis.annotations.Param("minIpCount") Integer minIpCount);
}
