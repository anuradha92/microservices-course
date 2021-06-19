package com.anuradha.profileservice.Services;

import rentcloud.commons.model.Customer;


public interface CustomerService {

    Customer addCustomer(Customer customer);

    Customer getCustomer(Integer id);

    void deleteCustomer(Integer id);

}
