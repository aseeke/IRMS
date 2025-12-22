-- 1. Create Office Table
DROP TABLE IF EXISTS `biz_office`;
CREATE TABLE `biz_office` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `office_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '办公室名称',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '位置描述',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '办公室信息表' ROW_FORMAT = DYNAMIC;

-- 2. Update Device Table (Add office_id)
ALTER TABLE `biz_device` ADD COLUMN `office_id` bigint NULL DEFAULT NULL COMMENT '办公室ID' AFTER `dept_id`;

-- 3. Update Network MAC Table (Restructure)
-- Remove ip_id, Add name, status
ALTER TABLE `biz_network_mac` DROP COLUMN `ip_id`;
ALTER TABLE `biz_network_mac` ADD COLUMN `mac_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'eth0' COMMENT '网卡名称' AFTER `device_id`;
ALTER TABLE `biz_network_mac` ADD COLUMN `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '1' COMMENT '状态(1:使用中, 0:停用)' AFTER `mac_address`;

-- 4. Update Network IP Table (Restructure)
-- Remove mac_address, Add mac_id
ALTER TABLE `biz_network_ip` DROP COLUMN `mac_address`;
ALTER TABLE `biz_network_ip` ADD COLUMN `mac_id` bigint NULL DEFAULT NULL COMMENT '关联MAC ID' AFTER `device_id`;
-- Note: We keep device_id in NetworkIp for easier querying, or we can remove it and rely on mac_id -> device_id. 
-- For now, keeping device_id is safer for existing queries, but we should ensure consistency.
-- Ideally, IP belongs to an Interface (MAC), which belongs to a Device.
