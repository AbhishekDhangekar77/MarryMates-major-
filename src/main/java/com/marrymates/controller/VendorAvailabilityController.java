package com.marrymates.controller;

import com.marrymates.model.VendorAvailability;
import com.marrymates.service.VendorAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendor/availability")
public class VendorAvailabilityController {

    @Autowired
    private VendorAvailabilityService availabilityService;

    @PostMapping
    public ResponseEntity<VendorAvailability> addAvailability(@RequestBody VendorAvailability availability) {
        return ResponseEntity.ok(availabilityService.addAvailability(availability));
    }

    @GetMapping("/{vendorId}")
    public ResponseEntity<List<VendorAvailability>> getAvailabilityByVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(availabilityService.getAvailabilityByVendor(vendorId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAvailability(@PathVariable Long id) {
        availabilityService.deleteAvailability(id);
        return ResponseEntity.ok("Availability slot deleted successfully!");
    }
}
