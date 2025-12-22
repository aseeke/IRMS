import random
import datetime

def get_time():
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

sql_header = """/*
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
"""

# Data Generation
sql_data = ""

# 1. Admin User
sql_data += "-- Admin User\n"
sql_data += "INSERT INTO `sys_user` VALUES (1, NULL, NULL, 'admin', 'Administrator', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '15888888888', '0', 'Super Admin', NOW());\n"

# 2. Departments (5 random)
depts = [
    (301, "研发部"), (302, "市场部"), (303, "财务部"), (304, "人事部"), (305, "运维部")
]
sql_data += "-- Departments\n"
for d in depts:
    sql_data += f"INSERT INTO `sys_dept` VALUES ({d[0]}, 0, '{d[1]}', 0, 'Leader', '13800000000', 'dept@irms.com', '0', NOW());\n"

# 3. Offices (5 random)
offices = [
    (10, "研发办公室", "8F-801"), (11, "市场办公室", "9F-901"), (12, "财务办公室", "10F-1001"), 
    (13, "人事办公室", "11F-1101"), (14, "运维办公室", "12F-1201")
]
sql_data += "-- Offices\n"
for o in offices:
    sql_data += f"INSERT INTO `biz_office` VALUES ({o[0]}, '{o[1]}', '{o[2]}', 'Generated', '0', NOW(), NOW());\n"

# 4. Users & Devices
# Scenarios:
# 1. 1 IP (5 users)
# 2. 2 IPs (5 users)
# 3. 3 IPs (5 users)
# 4. Multi-device (5 users, 2 devices each)

user_id_start = 1000
device_id_start = 2000
mac_id_start = 3000
ip_id_start = 4000

def generate_mac():
    return "52:54:00:%02x:%02x:%02x" % (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

def generate_ip(idx):
    return f"192.168.1.{idx}"

scenarios = [
    ("1 IP", 5, 1, 1), # 5 users, 1 device each, 1 IP each
    ("2 IPs", 5, 1, 2), # 5 users, 1 device each, 2 IPs each
    ("3 IPs", 5, 1, 3), # 5 users, 1 device each, 3 IPs each
    ("Multi-Device", 5, 2, 1) # 5 users, 2 devices each, 1 IP each
]

for sc_name, user_count, device_per_user, ip_per_device in scenarios:
    sql_data += f"-- Scenario: {sc_name}\n"
    for i in range(user_count):
        user_id = user_id_start
        user_id_start += 1
        dept = random.choice(depts)
        office = random.choice(offices)
        
        # Create User
        sql_data += f"INSERT INTO `sys_user` VALUES ({user_id}, {dept[0]}, {office[0]}, 'user{user_id}', 'User {user_id} ({sc_name})', '$2a$10$BatQS7QlgGa9Lk0uUdImXuCqViIGFF6apI5d7G.UOpzFAFqya.sie', '138{user_id}', '0', '{sc_name}', NOW());\n"
        
        # Create Devices
        for d_idx in range(device_per_user):
            device_id = device_id_start
            device_id_start += 1
            
            sql_data += f"INSERT INTO `biz_device` VALUES ({device_id}, 'Device-{device_id}', 'CODE-{device_id}', 'Model-X', {dept[0]}, {office[0]}, {user_id}, '1', NOW(), '{sc_name}', NOW(), NOW());\n"
            
            # Create MAC
            mac_id = mac_id_start
            mac_id_start += 1
            mac_addr = generate_mac()
            sql_data += f"INSERT INTO `biz_network_mac` VALUES ({mac_id}, {device_id}, 'eth0', '{mac_addr}', '1', NULL);\n"
            
            # Create IPs
            for ip_idx in range(ip_per_device):
                ip_id = ip_id_start
                ip_id_start += 1
                ip_addr = generate_ip(ip_id % 250) # Simple IP gen
                sql_data += f"INSERT INTO `biz_network_ip` VALUES ({ip_id}, {device_id}, {mac_id}, '{ip_addr}', 0, '1', '1', NOW());\n"

sql_data += "SET FOREIGN_KEY_CHECKS = 1;\n"

sql_content = sql_header + sql_data
with open('irms.sql', 'w', encoding='utf-8') as f:
    f.write(sql_content)

print("Successfully generated irms.sql")
