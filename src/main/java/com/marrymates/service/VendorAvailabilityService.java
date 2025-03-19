package com.marrymates.service;

import com.marrymates.model.VendorAvailability;
import com.marrymates.repository.VendorAvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorAvailabilityService {

    @Autowired
    private VendorAvailabilityRepository availabilityRepository;

    public VendorAvailability addAvailability(VendorAvailability availability) {
        return availabilityRepository.save(availability);
    }

    public List<VendorAvailability> getAvailabilityByVendor(Long vendorId) {
        return availabilityRepository.findByVendorId(vendorId);
    }

    public void deleteAvailability(Long id) {
        availabilityRepository.deleteById(id);
    }
}
