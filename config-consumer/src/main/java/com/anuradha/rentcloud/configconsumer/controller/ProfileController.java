package com.anuradha.rentcloud.configconsumer.controller;

import com.anuradha.rentcloud.configconsumer.model.MembeerProfileConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    @Autowired
    MembeerProfileConfiguration membeerProfileConfiguration;
    @RequestMapping("/profile")
    public MembeerProfileConfiguration getConfig(){
        return  membeerProfileConfiguration;
    }
}
