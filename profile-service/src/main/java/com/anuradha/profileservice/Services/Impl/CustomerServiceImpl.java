package com.anuradha.profileservice.Services.Impl;

import com.anuradha.profileservice.Repository.CustomerRepository;
import com.anuradha.profileservice.Services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rentcloud.commons.model.Customer;
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }
}
