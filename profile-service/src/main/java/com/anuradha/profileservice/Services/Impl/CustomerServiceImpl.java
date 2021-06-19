package com.anuradha.profileservice.Services.Impl;

import com.anuradha.profileservice.Repository.ProfileRepository;
import com.anuradha.profileservice.Services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rentcloud.commons.model.Customer;
@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        return profileRepository.save(customer);
    }

    @Override
    public Customer getCustomer(Integer id) {
        return profileRepository.findById(id).get();
    }

    @Override
    public void deleteCustomer(Integer id) {
        profileRepository.delete(getCustomer(id));
    }
}