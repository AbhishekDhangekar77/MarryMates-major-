package com.marrymates.service;

import com.marrymates.dto.VendorDTO;
//import com.marrymates.model.Status;
import com.marrymates.model.Vendor;
import com.marrymates.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorService {

    @Autowired
    private VendorRepository vendorRepository;

    // Add a new vendor
    public Vendor addVendor(VendorDTO vendorDTO) {
        Vendor vendor = new Vendor();
        vendor.setName(vendorDTO.getName());
        vendor.setUserName(vendorDTO.getUserName());
        vendor.setContactNumber(vendorDTO.getContactNumber());
        vendor.setEmail(vendorDTO.getEmail());
        vendor.setPassword(vendorDTO.getPassword());
        vendor.setAddress(vendorDTO.getAddress());
        vendor.setManagerName(vendorDTO.getManagerName());
        vendor.setManagerContact(vendorDTO.getManagerContact());
       // vendor.setStatus(Status.valueOf(vendorDTO.getStatus().toUpperCase()));
        
        return vendorRepository.save(vendor);
    }

    // Get all vendors
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    // Edit vendor profile
    public Vendor editVendorProfile(Long vendorId, VendorDTO vendorDTO) {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found with ID: " + vendorId));

        vendor.setName(vendorDTO.getName());
        vendor.setUserName(vendorDTO.getUserName());
        vendor.setContactNumber(vendorDTO.getContactNumber());
        vendor.setEmail(vendorDTO.getEmail());
        vendor.setPassword(vendorDTO.getPassword());
        vendor.setAddress(vendorDTO.getAddress());
        vendor.setManagerName(vendorDTO.getManagerName());
        vendor.setManagerContact(vendorDTO.getManagerContact());
       // vendor.setStatus(Status.valueOf(vendorDTO.getStatus().toUpperCase()));

        return vendorRepository.save(vendor);
    }

    // Get vendor by ID
    public Vendor getVendorById(Long vendorId) {
        return vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found with ID: " + vendorId));
    }

    public void deleteVendor(Long id) {
        vendorRepository.deleteById(id);
    }

	public Vendor editVendorServices(Long vendorId, VendorDTO vendorDTO) {
		Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found with ID: " + vendorId));
		
		
		 vendor.setServicesOffered(vendorDTO.getServicesOffered());
		
		return vendorRepository.save(vendor);
	}

	public Vendor addVendorServices(Long vendorId, VendorDTO vendorDTO) {
		Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new RuntimeException("Vendor not found with ID: " + vendorId));
		
		
		 vendor.setServicesOffered(vendorDTO.getServicesOffered());
		
		return vendorRepository.save(vendor);
	}
}