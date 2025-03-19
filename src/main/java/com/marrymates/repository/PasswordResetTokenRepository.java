package com.marrymates.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marrymates.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
}