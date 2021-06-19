package com.anuradha.rentcloud.auth.authserver02;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;

@SpringBootApplication
@EnableAuthorizationServer
public class AuthServer02Application {

    public static void main(String[] args) {
        SpringApplication.run(AuthServer02Application.class, args);
    }

}
