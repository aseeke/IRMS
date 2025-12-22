package com.irms.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("biz_network_ip")
public class NetworkIp {
    @TableId(type = IdType.AUTO)
    private Long id;
    private Long deviceId;
    private Long macId;
    private String ipAddress;
    private Integer netType; // 0: Inner, 1: Outer
    private String type; // 1: IPv4, 2: IPv6
    private String status; // 1: In use, 0: Unused
}
