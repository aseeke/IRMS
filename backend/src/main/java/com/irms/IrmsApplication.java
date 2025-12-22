package com.irms;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.irms.mapper")
public class IrmsApplication {
    public static void main(String[] args) {
        SpringApplication.run(IrmsApplication.class, args);
    }
}
