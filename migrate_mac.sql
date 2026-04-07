INSERT INTO biz_network_mac (device_id, mac_address, status)
SELECT DISTINCT device_id, mac_address, status
FROM biz_network_ip
WHERE mac_address IS NOT NULL AND mac_address != '';

UPDATE biz_network_ip i
JOIN biz_network_mac m ON i.device_id = m.device_id AND i.mac_address = m.mac_address
SET i.mac_id = m.id;
