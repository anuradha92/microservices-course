package com.anuradha.profileservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rentcloud.commons.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
}
