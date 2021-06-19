package com.anuradha.profileservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rentcloud.commons.model.Customer;

public interface ProfileRepository extends JpaRepository<Customer,Integer> {
}
