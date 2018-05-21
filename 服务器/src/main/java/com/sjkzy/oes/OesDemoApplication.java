package com.sjkzy.oes;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.sjkzy.oes.mapper")
@SpringBootApplication
public class OesDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(OesDemoApplication.class, args);
    }
}
