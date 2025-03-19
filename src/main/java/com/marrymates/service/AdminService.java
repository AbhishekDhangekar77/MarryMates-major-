package com.marrymates.service;

import com.marrymates.model.Booking;
import com.marrymates.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getBookingsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return bookingRepository.findBookingsByDateRange(startDate, endDate);
    }

    public Double getTotalRevenueByVendor(Long vendorId) {
        return bookingRepository.findTotalRevenueByVendor(vendorId);
    }
}
