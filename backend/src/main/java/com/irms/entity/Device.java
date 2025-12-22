package com.irms.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@TableName("biz_device")
public class Device {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String deviceName;
    private String deviceCode;
    private String model;
    private Long deptId;
    private Long officeId;
    private Long ownerId;
    private String status; // 1: In use, 2: In storage, 3: Repair, 4: Scrapped
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate purchasedDate; // Matches purchased_date
    private String remark;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;

    @TableField(exist = false)
    private User owner;

    @TableField(exist = false)
    private Dept dept;

    @TableField(exist = false)
    private Office office;

    @TableField(exist = false)
    private java.util.List<NetworkIp> networkIps;

    @TableField(exist = false)
    private java.util.List<NetworkMac> networkMacs;
}
