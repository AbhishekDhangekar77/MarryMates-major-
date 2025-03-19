package com.marrymates.repository;

import com.marrymates.model.VendorAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VendorAvailabilityRepository extends JpaRepository<VendorAvailability, Long> {
    List<VendorAvailability> findByVendorId(Long vendorId);
}
