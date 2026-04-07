ALTER TABLE biz_device ADD COLUMN office_id bigint NULL AFTER dept_id;

CREATE TABLE IF NOT EXISTS biz_office (
    id bigint NOT NULL AUTO_INCREMENT,
    office_name varchar(100) NOT NULL,
    location varchar(255) NULL,
    remark varchar(500) NULL,
    status char(1) DEFAULT '0',
    create_time datetime DEFAULT CURRENT_TIMESTAMP,
    update_time datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS biz_network_mac (
    id bigint NOT NULL AUTO_INCREMENT,
    device_id bigint NOT NULL,
    mac_name varchar(100) NULL,
    mac_address varchar(50) NOT NULL,
    status char(1) DEFAULT '1',
    remark varchar(500) NULL,
    PRIMARY KEY (id),
    KEY idx_device_id (device_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE biz_network_ip ADD COLUMN mac_id bigint NULL AFTER device_id;
