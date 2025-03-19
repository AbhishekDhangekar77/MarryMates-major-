package com.marrymates.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.marrymates.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
    // Custom query methods if needed
}
