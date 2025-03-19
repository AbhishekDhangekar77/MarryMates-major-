package com.marrymates.repository;

import com.marrymates.model.User;

import com.marrymates.model.Status;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    
    // only update specific fields (custom methods can be created in UserREpo using SPRING DATA JPA)
    @Modifying
    @Query("UPDATE User u SET u.email = :email WHERE u.id = :id")
    void updateUserEmail(@Param("id") Long id, @Param("email") String email);

    @Modifying
    @Query("UPDATE User u SET u.status = :status WHERE u.id = :id")
    void updateVendorStatus(@Param("id") Long id, @Param("status") Status status);

    @Query("SELECT u FROM User u WHERE u.role = 'VENDOR'")
    List<User> findAllVendors();

    
    
}
