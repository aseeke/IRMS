USE irms;

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

INSERT INTO `biz_office` VALUES (1, '总经理办公室', '10楼1001', 'CEO Office', NOW(), NOW());
INSERT INTO `biz_office` VALUES (2, '财务部大办公室', '9楼901', 'Finance Dept', NOW(), NOW());
INSERT INTO `biz_office` VALUES (3, '研发部会议室', '8楼808', 'R&D Meeting Room', NOW(), NOW());
