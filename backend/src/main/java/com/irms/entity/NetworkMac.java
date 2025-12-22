package com.irms.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("biz_network_mac")
public class NetworkMac {
    @TableId(type = IdType.AUTO)
    private Long id;
    private Long deviceId;
    private String macName;
    private String macAddress;
    private String status; // 1: In use, 0: Unused
    private String remark;

    @com.baomidou.mybatisplus.annotation.TableField(exist = false)
    private java.util.List<NetworkIp> ips;

}
