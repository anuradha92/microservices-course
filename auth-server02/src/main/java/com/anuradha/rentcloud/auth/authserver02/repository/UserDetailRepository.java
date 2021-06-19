package com.anuradha.rentcloud.auth.authserver02.repository;

import com.anuradha.rentcloud.auth.authserver02.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserName(String s);
}
