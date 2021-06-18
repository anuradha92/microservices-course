package com.anuradha.rentcloud.configconsumer.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class MembeerProfileConfiguration {
@Autowired
    Environment environment;
public String getDefaultModel(){
    return environment.getProperty("vehicle.default.model");
}
public String mainRentPeriod(){
    return environment.getProperty("member.rent.main");
}
}
