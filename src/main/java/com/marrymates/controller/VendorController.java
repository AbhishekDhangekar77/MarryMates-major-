package com.marrymates.controller;

import com.marrymates.dto.VendorDTO;
import com.marrymates.dto.VendorDTO2;
import com.marrymates.model.Vendor;
import com.marrymates.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/vendors")
@CrossOrigin(origins = "*") // Enable CORS for this controller                    
public class VendorController {

    @Autowired
    private VendorService vendorService;

    // Add a new vendor
    @PostMapping("/add")
    public ResponseEntity<Vendor> addVendor(@RequestBody VendorDTO vendorDTO) {
    	System.out.println(vendorDTO.getManagerContact());
        Vendor createdVendor = vendorService.addVendor(vendorDTO);
        return ResponseEntity.ok(createdVendor);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<VendorDTO2>> getAllVendors() {
        List<Vendor> vendors = vendorService.getAllVendors();

        // Manually map Vendor entities to VendorDTO2 objects
        List<VendorDTO2> vendorDTOs = new ArrayList<>();
        for (Vendor vendor : vendors) {
            VendorDTO2 vendorDTO = new VendorDTO2();
            vendorDTO.setId(vendor.getId());
            vendorDTO.setName(vendor.getName());
            vendorDTO.setUserName(vendor.getUserName());
            vendorDTO.setContactNumber(vendor.getContactNumber());
            vendorDTO.setEmail(vendor.getEmail());
            vendorDTO.setAddress(vendor.getAddress());
            vendorDTO.setStatus(vendor.getStatus().toString());
            vendorDTO.setManagerName(vendor.getManagerName());
            vendorDTO.setManagerContact(vendor.getManagerContact());
            vendorDTOs.add(vendorDTO);
        }

        return ResponseEntity.ok(vendorDTOs);
    }

    // Edit vendor profile
    @PutMapping("/profile/{vendorId}")
    public ResponseEntity<Vendor> editVendorProfile(
            @PathVariable Long vendorId,
            @RequestBody VendorDTO vendorDTO) {
    	System.out.println(vendorDTO.toString());
        Vendor updatedVendor = vendorService.editVendorProfile(vendorId, vendorDTO);
        return ResponseEntity.ok(updatedVendor);
    }
    
    
    @PostMapping("/addVendorServices/{vendorId}")
     public ResponseEntity<Vendor> addVendorServices(
    		 @PathVariable Long vendorId,
    		 @RequestBody VendorDTO vendorDTO){
    	System.out.println(vendorDTO.toString());
    	Vendor addUpdatedVendorServices = vendorService.addVendorServices(vendorId,vendorDTO);
    	return ResponseEntity.ok(addUpdatedVendorServices);
    } 
    
    
    
    @PatchMapping("/updateVendorServices/{vendorId}")
    public ResponseEntity<Vendor> editVendorServices(
    		@PathVariable Long vendorId,
    		@RequestBody VendorDTO vendorDTO){
    	System.out.println(vendorDTO.toString());
    	Vendor updatedVendorServices = vendorService.editVendorServices(vendorId,vendorDTO);
    	return ResponseEntity.ok(updatedVendorServices);
    }

    // Get vendor by ID
    @GetMapping("/{vendorId}")
    public ResponseEntity<Vendor> getVendorById(@PathVariable Long vendorId) {
        Vendor vendor = vendorService.getVendorById(vendorId);
        return ResponseEntity.ok(vendor);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteVendor(@PathVariable Long id) {
        vendorService.deleteVendor(id);
        return ResponseEntity.noContent().build();
    }

    
}
