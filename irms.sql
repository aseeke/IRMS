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
-- Table structure for biz_device
-- ----------------------------
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
-- Records of biz_office
-- ----------------------------
INSERT INTO `biz_office` VALUES (1, '总经理办公室', '10楼1001', 'CEO Office', '0', NOW(), NOW());
INSERT INTO `biz_office` VALUES (2, '财务部大办公室', '9楼901', 'Finance Dept', '0', NOW(), NOW());
INSERT INTO `biz_office` VALUES (3, '研发部会议室', '8楼808', 'R&D Meeting Room', '0', NOW(), NOW());

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '设备信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of biz_device
-- ----------------------------
INSERT INTO `biz_device` VALUES (1, 'Core Switch A', 'SW-001', 'Cisco 9300', 201, NULL, 2, '1', '2023-01-01', 'Core Network', '2025-12-05 23:49:21', '2025-12-05 23:49:21');
INSERT INTO `biz_device` VALUES (2, 'HR Server', 'SRV-002', 'Dell R740', 202, NULL, 3, '1', '2023-02-15', 'HR System DB', '2025-12-05 23:49:21', '2025-12-05 23:49:21');
INSERT INTO `biz_device` VALUES (3, 'Official Web Srv', 'SRV-003', 'Dell R740', 203, NULL, 4, '1', '2023-03-10', 'Public Website', '2025-12-05 23:49:21', '2025-12-05 23:49:21');
INSERT INTO `biz_device` VALUES (4, 'Test Server Cluster', 'SRV-004', 'HP ProLiant', 203, NULL, 100, '1', '2023-05-20', 'Testing Env', '2025-12-05 23:49:21', '2025-12-05 23:49:21');
INSERT INTO `biz_device` VALUES (5, 'HR Workstation 1', 'PC-001', 'Lenovo ThinkCentre', 202, NULL, 101, '1', '2023-06-01', 'Office PC', '2025-12-05 23:49:21', '2025-12-05 23:49:21');
INSERT INTO `biz_device` VALUES (10, '华为300', 'HUAWEI300', 'HUAWEI300', 203, NULL, 100, '1', NULL, '', '2025-12-07 19:26:26', '2025-12-07 19:26:26');
-- Test Data: 1 IP
INSERT INTO `biz_device` VALUES (11, 'Test Device 1 IP', 'TD-001', 'Virtual Machine', 201, NULL, 2, '1', '2025-12-22', 'Single IP Test', NOW(), NOW());
-- Test Data: 2 IPs
INSERT INTO `biz_device` VALUES (12, 'Test Device 2 IPs', 'TD-002', 'Virtual Machine', 201, NULL, 2, '1', '2025-12-22', 'Double IP Test', NOW(), NOW());
-- Test Data: 3 IPs
INSERT INTO `biz_device` VALUES (13, 'Test Device 3 IPs', 'TD-003', 'Physical Server', 201, NULL, 2, '1', '2025-12-22', 'Triple IP Test', NOW(), NOW());

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
) ENGINE = InnoDB AUTO_INCREMENT = 47 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '网络IP信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of biz_network_ip
-- ----------------------------
INSERT INTO `biz_network_ip` VALUES (35, 1, NULL, '192.168.1.201', 0, '1', '1', '2025-12-07 21:07:48');
INSERT INTO `biz_network_ip` VALUES (36, 2, 1, '192.168.1.50', 0, '1', '1', '2025-12-07 21:08:02');
INSERT INTO `biz_network_ip` VALUES (37, 2, NULL, '192.168.1.51', 0, '1', '1', '2025-12-07 21:08:02');
INSERT INTO `biz_network_ip` VALUES (38, 3, 2, '202.10.10.5', 1, '1', '1', '2025-12-07 21:08:23');
INSERT INTO `biz_network_ip` VALUES (39, 3, NULL, '192.168.1.101', 0, '1', '1', '2025-12-07 21:08:23');
INSERT INTO `biz_network_ip` VALUES (40, 3, NULL, '192.168.1.102', 0, '1', '1', '2025-12-07 21:08:23');
INSERT INTO `biz_network_ip` VALUES (41, 5, 3, '10.10.10.1', 0, '1', '1', '2025-12-07 21:09:22');
INSERT INTO `biz_network_ip` VALUES (42, 5, NULL, '10.10.10.2', 0, '1', '1', '2025-12-07 21:09:22');
INSERT INTO `biz_network_ip` VALUES (43, 4, 4, '10.10.10.100', 0, '1', '1', '2025-12-07 21:10:43');
INSERT INTO `biz_network_ip` VALUES (44, 4, 5, '10.10.10.101', 0, '1', '1', '2025-12-07 21:10:43');
INSERT INTO `biz_network_ip` VALUES (45, 4, 6, '10.10.10.102', 0, '1', '1', '2025-12-07 21:10:43');
INSERT INTO `biz_network_ip` VALUES (46, 10, 7, '192.168.1.200', 0, '1', '1', '2025-12-07 21:30:22');
-- Test Data: 1 IP (Device 11, MAC 8)
INSERT INTO `biz_network_ip` VALUES (50, 11, 8, '192.168.100.1', 0, '1', '1', NOW());
-- Test Data: 2 IPs (Device 12, MAC 9)
INSERT INTO `biz_network_ip` VALUES (51, 12, 9, '192.168.100.2', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (52, 12, 9, '10.0.0.2', 0, '1', '1', NOW());
-- Test Data: 3 IPs (Device 13, MAC 10)
INSERT INTO `biz_network_ip` VALUES (53, 13, 10, '192.168.100.3', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (54, 13, 10, '10.0.0.3', 0, '1', '1', NOW());
INSERT INTO `biz_network_ip` VALUES (55, 13, 10, '172.16.0.3', 0, '1', '1', NOW());

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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = 'MAC资源表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of biz_network_mac
-- ----------------------------
INSERT INTO `biz_network_mac` VALUES (1, 2, 'eth0', 'AA:BB:CC:DD:EE:03', '1', NULL);
INSERT INTO `biz_network_mac` VALUES (2, 3, 'eth0', 'AA:BB:CC:DD:EE:04', '1', NULL);
INSERT INTO `biz_network_mac` VALUES (3, 5, 'eth0', 'AA:BB:CC:DD:EE:08', '1', NULL);
INSERT INTO `biz_network_mac` VALUES (4, 4, 'eth0', 'AA:BB:CC:DD:EE:05', '1', NULL);
INSERT INTO `biz_network_mac` VALUES (5, 4, 'eth1', 'AA:BB:CC:DD:EE:06', '1', NULL);
INSERT INTO `biz_network_mac` VALUES (6, 4, 'eth2', 'AA:BB:CC:DD:EE:07', '1', NULL);
INSERT INTO `biz_network_mac` VALUES (7, 10, 'eth0', 'AA:BB:CC:DD:EE:08', '1', NULL);
-- Test Data MACs
INSERT INTO `biz_network_mac` VALUES (8, 11, 'eth0', 'AA:BB:CC:DD:EE:11', '1', 'Test Device 1');
INSERT INTO `biz_network_mac` VALUES (9, 12, 'eth0', 'AA:BB:CC:DD:EE:12', '1', 'Test Device 2');
INSERT INTO `biz_network_mac` VALUES (10, 13, 'eth0', 'AA:BB:CC:DD:EE:13', '1', 'Test Device 3');

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
) ENGINE = InnoDB AUTO_INCREMENT = 204 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '部门表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (100, 100, 'XXXX机构', 0, 'CEO', '13888888888', 'ceo@irms.com', '0', '2025-12-05 23:49:20');
INSERT INTO `sys_dept` VALUES (101, 100, 'IT Dept', 1, 'IT Manager', '13999999999', 'it@irms.com', '0', '2025-12-05 23:49:20');
INSERT INTO `sys_dept` VALUES (102, 100, 'HR Dept', 2, 'HR Manager', '13777777777', 'hr@irms.com', '0', '2025-12-05 23:49:20');
INSERT INTO `sys_dept` VALUES (103, 101, 'Network Ops', 1, 'Net Admin', '13666666666', 'net@irms.com', '0', '2025-12-05 23:49:20');
INSERT INTO `sys_dept` VALUES (200, 0, 'XXXX机构0', 0, '', '', '', '0', '2025-12-05 23:50:57');
INSERT INTO `sys_dept` VALUES (201, 200, 'XXX部门1', 0, '', '', '', '0', '2025-12-05 23:51:09');
INSERT INTO `sys_dept` VALUES (202, 200, 'XXX部门2', 0, '', '', '', '0', '2025-12-05 23:51:26');
INSERT INTO `sys_dept` VALUES (203, 200, 'XXX部门3', 0, '', '', '', '0', '2025-12-05 23:51:37');

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
) ENGINE = InnoDB AUTO_INCREMENT = 103 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 200, NULL, 'admin', 'Administrator', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '15888888888', '0', 'Super Admin', '2025-12-05 23:49:20');
INSERT INTO `sys_user` VALUES (2, 201, NULL, 'zhangsan1', '张三1', '', '15999999999', '0', 'Network Engineer', '2025-12-05 23:49:21');
INSERT INTO `sys_user` VALUES (3, 202, NULL, 'zhangsan2', '张三2', '', '15777777777', '0', 'HR Specialist', '2025-12-05 23:49:21');
INSERT INTO `sys_user` VALUES (4, 203, NULL, 'zhangsan3', '张三3', '', '15666666666', '0', 'Ops Operator', '2025-12-05 23:49:21');
INSERT INTO `sys_user` VALUES (100, 201, NULL, 'zhangsan4', '张三4', '$2a$10$gaakGaCUiEXB7342u7ggheHrLiAnG08o.xZomL/MZ90kKN/iY5KFS', '', '0', '', '2025-12-07 19:25:42');
INSERT INTO `sys_user` VALUES (101, 202, NULL, 'zhangsan5', '张三5', '$2a$10$v0glv5ZyvgXyuephjbOa4u.lctjcHEbDL/55CXYbz40gbzhO4evkO', '', '0', '', '2025-12-07 19:25:42');
INSERT INTO `sys_user` VALUES (102, 203, NULL, 'zhangsan6', '张三6', '$2a$10$CpfDO9YKCUQIiUmENBvat.4fdII2fZUJiwfhSrkgXZk1wLyGfNohC', '', '0', '', '2025-12-07 19:25:42');

SET FOREIGN_KEY_CHECKS = 1;
