/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80407 (8.4.7)
 Source Host           : localhost:3306
 Source Schema         : irms

 Target Server Type    : MySQL
 Target Server Version : 80407 (8.4.7)
 File Encoding         : 65001

 Date: 22/12/2025 09:07:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for biz_office
-- ----------------------------
DROP TABLE IF EXISTS `biz_office`;
CREATE TABLE `biz_office` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `office_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '办公室名称',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '位置描述',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '办公室信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for biz_device
-- ----------------------------
DROP TABLE IF EXISTS `biz_device`;
CREATE TABLE `biz_device`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `device_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '设备名称',
  `device_code` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '设备编号',
  `model` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '规格型号',
  `dept_id` bigint NULL DEFAULT NULL COMMENT '归属部门ID',
  `office_id` bigint NULL DEFAULT NULL COMMENT '办公室ID',
  `owner_id` bigint NULL DEFAULT NULL COMMENT '责任人ID',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '1' COMMENT '状态（1在用 2入库 3报修 4报废）',
  `purchased_date` date NULL DEFAULT NULL COMMENT '采购日期',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1000 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '设备信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for biz_network_ip
-- ----------------------------
DROP TABLE IF EXISTS `biz_network_ip`;
CREATE TABLE `biz_network_ip`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `device_id` bigint NOT NULL COMMENT '关联设备ID',
  `mac_id` bigint NULL DEFAULT NULL COMMENT '关联MAC ID',
  `ip_address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'IP地址',
  `net_type` int NULL DEFAULT 0 COMMENT '网络类型 0:内网 1:外网',
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '1' COMMENT 'IP类型(1:IPv4, 2:IPv6)',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '1' COMMENT '状态(1:使用中, 0:停用)',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_device_id`(`device_id` ASC) USING BTREE,
  INDEX `idx_ip_addr`(`ip_address` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1000 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '网络IP信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for biz_network_mac
-- ----------------------------
DROP TABLE IF EXISTS `biz_network_mac`;
CREATE TABLE `biz_network_mac`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `device_id` bigint NULL DEFAULT NULL COMMENT '关联设备ID',
  `mac_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'eth0' COMMENT '网卡名称',
  `mac_address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'MAC地址',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '1' COMMENT '状态(1:使用中, 0:停用)',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1000 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = 'MAC资源表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `parent_id` bigint NULL DEFAULT 0 COMMENT '父部门ID',
  `dept_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '部门名称',
  `order_num` int NULL DEFAULT 0 COMMENT '显示顺序',
  `leader` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '负责人',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系电话',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮箱',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '部门状态（0正常 1停用）',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1000 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '部门表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dept_id` bigint NULL DEFAULT NULL COMMENT '部门ID',
  `office_id` bigint NULL DEFAULT NULL COMMENT '办公室ID',
  `user_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户昵称',
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '密码',
  `phonenumber` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '手机号码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '帐号状态（0正常 1停用）',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_user_name`(`user_name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1000 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户信息表' ROW_FORMAT = DYNAMIC;
-- Admin User
INSERT INTO `sys_user` VALUES (1, NULL, NULL, 'admin', 'Administrator', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '15888888888', '0', 'Super Admin', NOW());
-- Departments
INSERT INTO `sys_dept` VALUES (301, 0, '研发部', 0, 'Leader', '13800000000', 'dept@irms.com', '0', NOW());
INSERT INTO `sys_dept` VALUES (302, 0, '市场部', 0, 'Leader', '13800000000', 'dept@irms.com', '0', NOW());
INSERT INTO `sys_dept` VALUES (303, 0, '财务部', 0, 'Leader', '13800000000', 'dept@irms.com', '0', NOW());
INSERT INTO `sys_dept` VALUES (304, 0, '人事部', 0, 'Leader', '13800000000', 'dept@irms.com', '0', NOW());
INSERT INTO `sys_dept` VALUES (305, 0, '运维部', 0, 'Leader', '13800000000', 'dept@irms.com', '0', NOW());
-- Offices
INSERT INTO `biz_office` VALUES (10, '研发办公室', '8F-801', 'Generated', '0', NOW(), NOW());
INSERT INTO `biz_office` VALUES (11, '市场办公室', '9F-901', 'Generated', '0', NOW(), NOW());
INSERT INTO `biz_office` VALUES (12, '财务办公室', '10F-1001', 'Generated', '0', NOW(), NOW());
INSERT INTO `biz_office` VALUES (13, '人事办公室', '11F-1101', 'Generated', '0', NOW(), NOW());
INSERT INTO `biz_office` VALUES (14, '运维办公室', '12F-1201', 'Generated', '0', NOW(), NOW());
-- Scenario: 1 IP
INSERT INTO `sys_user` VALUES (1000, 303, 13, 'user1000', 'User 1000 (1 IP)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381000', '0', '1 IP', NOW());
INSERT INTO `biz_device` VALUES (2000, 'Device-2000', 'CODE-2000', 'Model-X', 303, 13, 1000, '1', NOW(), '1 IP', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3000, 2000, 'eth0', '52:54:00:f3:87:1d', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4000, 2000, 3000, '192.168.1.0', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1001, 302, 13, 'user1001', 'User 1001 (1 IP)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381001', '0', '1 IP', NOW());
INSERT INTO `biz_device` VALUES (2001, 'Device-2001', 'CODE-2001', 'Model-X', 302, 13, 1001, '1', NOW(), '1 IP', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3001, 2001, 'eth0', '52:54:00:17:42:72', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4001, 2001, 3001, '192.168.1.1', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1002, 304, 11, 'user1002', 'User 1002 (1 IP)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381002', '0', '1 IP', NOW());
INSERT INTO `biz_device` VALUES (2002, 'Device-2002', 'CODE-2002', 'Model-X', 304, 11, 1002, '1', NOW(), '1 IP', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3002, 2002, 'eth0', '52:54:00:b0:da:33', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4002, 2002, 3002, '192.168.1.2', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1003, 301, 12, 'user1003', 'User 1003 (1 IP)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381003', '0', '1 IP', NOW());
INSERT INTO `biz_device` VALUES (2003, 'Device-2003', 'CODE-2003', 'Model-X', 301, 12, 1003, '1', NOW(), '1 IP', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3003, 2003, 'eth0', '52:54:00:a0:c1:b3', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4003, 2003, 3003, '192.168.1.3', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1004, 304, 10, 'user1004', 'User 1004 (1 IP)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381004', '0', '1 IP', NOW());
INSERT INTO `biz_device` VALUES (2004, 'Device-2004', 'CODE-2004', 'Model-X', 304, 10, 1004, '1', NOW(), '1 IP', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3004, 2004, 'eth0', '52:54:00:e8:ee:b3', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4004, 2004, 3004, '192.168.1.4', 0, '1', '1', NOW());
-- Scenario: 2 IPs
INSERT INTO `sys_user` VALUES (1005, 303, 14, 'user1005', 'User 1005 (2 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381005', '0', '2 IPs', NOW());
INSERT INTO `biz_device` VALUES (2005, 'Device-2005', 'CODE-2005', 'Model-X', 303, 14, 1005, '1', NOW(), '2 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3005, 2005, 'eth0', '52:54:00:99:73:66', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4005, 2005, 3005, '192.168.1.5', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4006, 2005, 3005, '192.168.1.6', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1006, 303, 11, 'user1006', 'User 1006 (2 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381006', '0', '2 IPs', NOW());
INSERT INTO `biz_device` VALUES (2006, 'Device-2006', 'CODE-2006', 'Model-X', 303, 11, 1006, '1', NOW(), '2 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3006, 2006, 'eth0', '52:54:00:c4:62:09', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4007, 2006, 3006, '192.168.1.7', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4008, 2006, 3006, '192.168.1.8', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1007, 305, 10, 'user1007', 'User 1007 (2 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381007', '0', '2 IPs', NOW());
INSERT INTO `biz_device` VALUES (2007, 'Device-2007', 'CODE-2007', 'Model-X', 305, 10, 1007, '1', NOW(), '2 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3007, 2007, 'eth0', '52:54:00:f2:d2:1c', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4009, 2007, 3007, '192.168.1.9', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4010, 2007, 3007, '192.168.1.10', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1008, 301, 10, 'user1008', 'User 1008 (2 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381008', '0', '2 IPs', NOW());
INSERT INTO `biz_device` VALUES (2008, 'Device-2008', 'CODE-2008', 'Model-X', 301, 10, 1008, '1', NOW(), '2 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3008, 2008, 'eth0', '52:54:00:e6:a8:d4', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4011, 2008, 3008, '192.168.1.11', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4012, 2008, 3008, '192.168.1.12', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1009, 302, 13, 'user1009', 'User 1009 (2 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381009', '0', '2 IPs', NOW());
INSERT INTO `biz_device` VALUES (2009, 'Device-2009', 'CODE-2009', 'Model-X', 302, 13, 1009, '1', NOW(), '2 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3009, 2009, 'eth0', '52:54:00:1c:3c:bd', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4013, 2009, 3009, '192.168.1.13', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4014, 2009, 3009, '192.168.1.14', 0, '1', '1', NOW());
-- Scenario: 3 IPs
INSERT INTO `sys_user` VALUES (1010, 305, 11, 'user1010', 'User 1010 (3 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381010', '0', '3 IPs', NOW());
INSERT INTO `biz_device` VALUES (2010, 'Device-2010', 'CODE-2010', 'Model-X', 305, 11, 1010, '1', NOW(), '3 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3010, 2010, 'eth0', '52:54:00:25:94:df', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4015, 2010, 3010, '192.168.1.15', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4016, 2010, 3010, '192.168.1.16', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4017, 2010, 3010, '192.168.1.17', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1011, 303, 10, 'user1011', 'User 1011 (3 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381011', '0', '3 IPs', NOW());
INSERT INTO `biz_device` VALUES (2011, 'Device-2011', 'CODE-2011', 'Model-X', 303, 10, 1011, '1', NOW(), '3 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3011, 2011, 'eth0', '52:54:00:bf:7a:c6', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4018, 2011, 3011, '192.168.1.18', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4019, 2011, 3011, '192.168.1.19', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4020, 2011, 3011, '192.168.1.20', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1012, 305, 13, 'user1012', 'User 1012 (3 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381012', '0', '3 IPs', NOW());
INSERT INTO `biz_device` VALUES (2012, 'Device-2012', 'CODE-2012', 'Model-X', 305, 13, 1012, '1', NOW(), '3 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3012, 2012, 'eth0', '52:54:00:04:cc:ad', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4021, 2012, 3012, '192.168.1.21', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4022, 2012, 3012, '192.168.1.22', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4023, 2012, 3012, '192.168.1.23', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1013, 301, 14, 'user1013', 'User 1013 (3 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381013', '0', '3 IPs', NOW());
INSERT INTO `biz_device` VALUES (2013, 'Device-2013', 'CODE-2013', 'Model-X', 301, 14, 1013, '1', NOW(), '3 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3013, 2013, 'eth0', '52:54:00:1f:07:74', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4024, 2013, 3013, '192.168.1.24', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4025, 2013, 3013, '192.168.1.25', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4026, 2013, 3013, '192.168.1.26', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1014, 305, 11, 'user1014', 'User 1014 (3 IPs)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381014', '0', '3 IPs', NOW());
INSERT INTO `biz_device` VALUES (2014, 'Device-2014', 'CODE-2014', 'Model-X', 305, 11, 1014, '1', NOW(), '3 IPs', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3014, 2014, 'eth0', '52:54:00:5a:37:76', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4027, 2014, 3014, '192.168.1.27', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4028, 2014, 3014, '192.168.1.28', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (4029, 2014, 3014, '192.168.1.29', 0, '1', '1', NOW());
-- Scenario: Multi-Device
INSERT INTO `sys_user` VALUES (1015, 301, 11, 'user1015', 'User 1015 (Multi-Device)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381015', '0', 'Multi-Device', NOW());
INSERT INTO `biz_device` VALUES (2015, 'Device-2015', 'CODE-2015', 'Model-X', 301, 11, 1015, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3015, 2015, 'eth0', '52:54:00:b5:d3:0d', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4030, 2015, 3015, '192.168.1.30', 0, '1', '1', NOW());
INSERT INTO `biz_device` VALUES (2016, 'Device-2016', 'CODE-2016', 'Model-X', 301, 11, 1015, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3016, 2016, 'eth0', '52:54:00:d2:81:46', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4031, 2016, 3016, '192.168.1.31', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1016, 305, 11, 'user1016', 'User 1016 (Multi-Device)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381016', '0', 'Multi-Device', NOW());
INSERT INTO `biz_device` VALUES (2017, 'Device-2017', 'CODE-2017', 'Model-X', 305, 11, 1016, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3017, 2017, 'eth0', '52:54:00:25:ca:b3', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4032, 2017, 3017, '192.168.1.32', 0, '1', '1', NOW());
INSERT INTO `biz_device` VALUES (2018, 'Device-2018', 'CODE-2018', 'Model-X', 305, 11, 1016, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3018, 2018, 'eth0', '52:54:00:56:a3:3f', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4033, 2018, 3018, '192.168.1.33', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1017, 304, 13, 'user1017', 'User 1017 (Multi-Device)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381017', '0', 'Multi-Device', NOW());
INSERT INTO `biz_device` VALUES (2019, 'Device-2019', 'CODE-2019', 'Model-X', 304, 13, 1017, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3019, 2019, 'eth0', '52:54:00:22:ca:73', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4034, 2019, 3019, '192.168.1.34', 0, '1', '1', NOW());
INSERT INTO `biz_device` VALUES (2020, 'Device-2020', 'CODE-2020', 'Model-X', 304, 13, 1017, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3020, 2020, 'eth0', '52:54:00:5c:60:c7', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4035, 2020, 3020, '192.168.1.35', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1018, 303, 11, 'user1018', 'User 1018 (Multi-Device)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381018', '0', 'Multi-Device', NOW());
INSERT INTO `biz_device` VALUES (2021, 'Device-2021', 'CODE-2021', 'Model-X', 303, 11, 1018, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3021, 2021, 'eth0', '52:54:00:c6:f2:c6', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4036, 2021, 3021, '192.168.1.36', 0, '1', '1', NOW());
INSERT INTO `biz_device` VALUES (2022, 'Device-2022', 'CODE-2022', 'Model-X', 303, 11, 1018, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3022, 2022, 'eth0', '52:54:00:40:ae:fd', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4037, 2022, 3022, '192.168.1.37', 0, '1', '1', NOW());
INSERT INTO `sys_user` VALUES (1019, 305, 12, 'user1019', 'User 1019 (Multi-Device)', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '1381019', '0', 'Multi-Device', NOW());
INSERT INTO `biz_device` VALUES (2023, 'Device-2023', 'CODE-2023', 'Model-X', 305, 12, 1019, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3023, 2023, 'eth0', '52:54:00:14:f0:9e', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4038, 2023, 3023, '192.168.1.38', 0, '1', '1', NOW());
INSERT INTO `biz_device` VALUES (2024, 'Device-2024', 'CODE-2024', 'Model-X', 305, 12, 1019, '1', NOW(), 'Multi-Device', NOW(), NOW());
INSERT INTO `biz_network_mac` VALUES (3024, 2024, 'eth0', '52:54:00:b3:35:bf', '1', NULL);
INSERT INTO `biz_network_ip` VALUES (4039, 2024, 3024, '192.168.1.39', 0, '1', '1', NOW());
SET FOREIGN_KEY_CHECKS = 1;
