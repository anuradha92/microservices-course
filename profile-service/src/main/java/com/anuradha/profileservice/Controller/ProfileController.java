package com.anuradha.profileservice.Controller;

import com.anuradha.profileservice.Services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import rentcloud.commons.model.Customer;

@RestController
@RequestMapping(value = "/service")
public class ProfileController {

    @Autowired
    CustomerService customerService;
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }
}
