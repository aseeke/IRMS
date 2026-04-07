-- MySQL dump 10.13  Distrib 8.4.7, for Win64 (x86_64)
--
-- Host: localhost    Database: irms
-- ------------------------------------------------------
-- Server version	8.4.7

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `biz_device`
--

DROP TABLE IF EXISTS `biz_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biz_device` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `device_name` varchar(100) NOT NULL COMMENT '设备名称',
  `device_code` varchar(64) DEFAULT NULL COMMENT '设备编号',
  `model` varchar(100) DEFAULT NULL COMMENT '规格型号',
  `dept_id` bigint DEFAULT NULL COMMENT '归属部门ID',
  `office_id` bigint DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL COMMENT '责任人ID',
  `status` char(1) DEFAULT '1' COMMENT '状态（1在用 2入库 3报修 4报废）',
  `purchased_date` date DEFAULT NULL COMMENT '采购日期',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设备信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biz_device`
--

LOCK TABLES `biz_device` WRITE;
/*!40000 ALTER TABLE `biz_device` DISABLE KEYS */;
INSERT INTO `biz_device` VALUES (1,'Core Switch A','SW-001','Cisco 9300',103,2,2,'1','2023-01-01','Core Network','2026-04-07 10:54:02','2026-04-07 11:35:36'),(2,'HR Server','SRV-002','Dell R740',101,2,2,'1','2023-02-15','HR System DB','2026-04-07 10:54:02','2026-04-07 11:35:36'),(3,'Official Web Srv','SRV-003','Dell R740',101,2,2,'1','2023-03-10','Public Website','2026-04-07 10:54:02','2026-04-07 11:35:36'),(4,'Test Server Cluster','SRV-004','HP ProLiant',103,4,4,'1','2023-05-20','Testing Env','2026-04-07 10:54:02','2026-04-07 11:35:24'),(5,'HR Workstation 1','PC-001','Lenovo ThinkCentre',102,3,3,'1','2023-06-01','Office PC','2026-04-07 10:54:02','2026-04-07 11:35:30');
/*!40000 ALTER TABLE `biz_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biz_network_ip`
--

DROP TABLE IF EXISTS `biz_network_ip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biz_network_ip` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `device_id` bigint NOT NULL COMMENT '关联设备ID',
  `mac_id` bigint DEFAULT NULL,
  `ip_address` varchar(50) NOT NULL COMMENT 'IP地址',
  `mac_address` varchar(50) DEFAULT NULL COMMENT 'MAC地址 (Phase 2)',
  `net_type` int DEFAULT '0' COMMENT '网络类型 0:内网 1:外网 (Phase 2)',
  `type` char(1) DEFAULT '1' COMMENT 'IP类型(1:IPv4, 2:IPv6)',
  `status` char(1) DEFAULT '1' COMMENT '状态(1:使用中, 0:停用)',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_device_id` (`device_id`),
  KEY `idx_ip_addr` (`ip_address`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='网络IP信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biz_network_ip`
--

LOCK TABLES `biz_network_ip` WRITE;
/*!40000 ALTER TABLE `biz_network_ip` DISABLE KEYS */;
INSERT INTO `biz_network_ip` VALUES (1,1,1,'192.168.1.1','AA:BB:CC:DD:EE:01',0,'1','1','2026-04-07 10:54:02'),(2,1,2,'202.10.10.1','AA:BB:CC:DD:EE:02',1,'1','1','2026-04-07 10:54:02'),(3,2,3,'192.168.1.50','AA:BB:CC:DD:EE:03',0,'1','1','2026-04-07 10:54:02'),(4,3,4,'202.10.10.5','AA:BB:CC:DD:EE:04',1,'1','1','2026-04-07 10:54:02'),(5,4,5,'10.0.0.100','AA:BB:CC:DD:EE:05',0,'1','1','2026-04-07 10:54:02'),(6,4,6,'10.0.0.101','AA:BB:CC:DD:EE:06',0,'1','1','2026-04-07 10:54:02'),(7,4,7,'10.0.0.102','AA:BB:CC:DD:EE:07',0,'1','1','2026-04-07 10:54:02'),(8,5,8,'192.168.10.50','AA:BB:CC:DD:EE:08',0,'1','1','2026-04-07 10:54:02');
/*!40000 ALTER TABLE `biz_network_ip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biz_network_mac`
--

DROP TABLE IF EXISTS `biz_network_mac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biz_network_mac` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `device_id` bigint NOT NULL,
  `mac_name` varchar(100) DEFAULT NULL,
  `mac_address` varchar(50) NOT NULL,
  `status` char(1) DEFAULT '1',
  `remark` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_device_id` (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biz_network_mac`
--

LOCK TABLES `biz_network_mac` WRITE;
/*!40000 ALTER TABLE `biz_network_mac` DISABLE KEYS */;
INSERT INTO `biz_network_mac` VALUES (1,1,NULL,'AA:BB:CC:DD:EE:01','1',NULL),(2,1,NULL,'AA:BB:CC:DD:EE:02','1',NULL),(3,2,NULL,'AA:BB:CC:DD:EE:03','1',NULL),(4,3,NULL,'AA:BB:CC:DD:EE:04','1',NULL),(5,4,NULL,'AA:BB:CC:DD:EE:05','1',NULL),(6,4,NULL,'AA:BB:CC:DD:EE:06','1',NULL),(7,4,NULL,'AA:BB:CC:DD:EE:07','1',NULL),(8,5,NULL,'AA:BB:CC:DD:EE:08','1',NULL);
/*!40000 ALTER TABLE `biz_network_mac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biz_office`
--

DROP TABLE IF EXISTS `biz_office`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biz_office` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `office_name` varchar(100) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `remark` varchar(500) DEFAULT NULL,
  `status` char(1) DEFAULT '0',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biz_office`
--

LOCK TABLES `biz_office` WRITE;
/*!40000 ALTER TABLE `biz_office` DISABLE KEYS */;
INSERT INTO `biz_office` VALUES (1,'101','101','101','0','2026-04-07 11:29:43','2026-04-07 11:29:43'),(2,'201','201','201','0','2026-04-07 11:29:49','2026-04-07 11:29:49'),(3,'301','301','301','0','2026-04-07 11:29:55','2026-04-07 11:29:55'),(4,'401','401','401','0','2026-04-07 11:30:07','2026-04-07 11:30:07');
/*!40000 ALTER TABLE `biz_office` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dept`
--

DROP TABLE IF EXISTS `sys_dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sys_dept` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `parent_id` bigint DEFAULT '0' COMMENT '父部门ID',
  `dept_name` varchar(50) DEFAULT '' COMMENT '部门名称',
  `order_num` int DEFAULT '0' COMMENT '显示顺序',
  `leader` varchar(20) DEFAULT NULL COMMENT '负责人',
  `phone` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `status` char(1) DEFAULT '0' COMMENT '部门状态（0正常 1停用）',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='部门表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dept`
--

LOCK TABLES `sys_dept` WRITE;
/*!40000 ALTER TABLE `sys_dept` DISABLE KEYS */;
INSERT INTO `sys_dept` VALUES (100,0,'Headquarters',0,'CEO','13888888888','ceo@irms.com','0','2026-04-07 10:54:02'),(101,100,'IT Dept',1,'IT Manager','13999999999','it@irms.com','0','2026-04-07 10:54:02'),(102,100,'HR Dept',2,'HR Manager','13777777777','hr@irms.com','0','2026-04-07 10:54:02'),(103,101,'Network Ops',1,'Net Admin','13666666666','net@irms.com','0','2026-04-07 10:54:02');
/*!40000 ALTER TABLE `sys_dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_user`
--

DROP TABLE IF EXISTS `sys_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sys_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dept_id` bigint DEFAULT NULL COMMENT '部门ID',
  `office_id` bigint DEFAULT NULL,
  `user_name` varchar(30) NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) NOT NULL COMMENT '用户昵称',
  `password` varchar(100) DEFAULT '123456' COMMENT '密码',
  `phonenumber` varchar(11) DEFAULT '' COMMENT '手机号码',
  `status` char(1) DEFAULT '0' COMMENT '帐号状态（0正常 1停用）',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_user`
--

LOCK TABLES `sys_user` WRITE;
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
INSERT INTO `sys_user` VALUES (1,101,1,'admin','Administrator','$2a$10$jcfcwzB9OKgBgWNgssn8MOUKI3evdbsEeIlNVqCnRfxaCwhjn1RVu','15888888888','0','Super Admin','2026-04-07 10:54:02'),(2,101,2,'zhangsan','Zhang San','123456','15999999999','0','Network Engineer','2026-04-07 10:54:02'),(3,102,3,'lisi','Li Si','123456','15777777777','0','HR Specialist','2026-04-07 10:54:02'),(4,103,4,'wangwu','Wang Wu','123456','15666666666','0','Ops Operator','2026-04-07 10:54:02');
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-07 14:33:06
