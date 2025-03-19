package com.marrymates.controller;

import com.marrymates.model.Booking;
import com.marrymates.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/admin/reports")
@CrossOrigin(origins = "*") // Enable CORS for this controller
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getBookingsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        return ResponseEntity.ok(adminService.getBookingsByDateRange(startDate, endDate));
    }

    @GetMapping("/revenue/{vendorId}")
    public ResponseEntity<Double> getRevenueByVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(adminService.getTotalRevenueByVendor(vendorId));
    }
}
