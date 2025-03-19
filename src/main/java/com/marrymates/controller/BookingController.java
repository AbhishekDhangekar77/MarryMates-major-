package com.marrymates.controller;

import com.marrymates.dto.BookingDTO;
import com.marrymates.model.Booking;
import com.marrymates.model.BookingStatus;
import com.marrymates.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*") // Enable CORS for this controller
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping(value="/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Booking> createBooking(@Valid @RequestBody Booking booking) {
        return ResponseEntity.ok(bookingService.createBooking(booking));
    }

    @GetMapping
    public List<BookingDTO> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Booking>> getBookingsByClient(@PathVariable Long clientId) {
        return ResponseEntity.ok(bookingService.getBookingsByClientId(clientId));
    }

    @GetMapping("/vendor/{vendorId}")
    public ResponseEntity<List<Booking>> getBookingsByVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(bookingService.getBookingsByVendor(vendorId));
    }

    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<Booking> updateBookingStatus(@PathVariable Long id, @RequestParam BookingStatus status) {
        return ResponseEntity.ok(bookingService.updateBookingStatus(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Booking deleted successfully!");
    }
    
    @PutMapping("/{bookingId}/approve")
    public ResponseEntity<Booking> approveBooking(@PathVariable Long bookingId) {
        return ResponseEntity.ok(bookingService.confirmBooking(bookingId));
    }

    
    
    //cancel booking for CLient
    
    @PutMapping("/cancel/{id}")
    public ResponseEntity<Booking> cancelBooking(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.cancelBooking(id));
    }

    
    //update booking for client
    @PutMapping("/update/{id}")
    public ResponseEntity<Booking> updateBooking(
            @PathVariable Long id,
            @RequestBody Booking updatedBooking) {
        return ResponseEntity.ok(bookingService.updateBooking(id, updatedBooking));
    }

    //vendor availability
    @GetMapping("/pending/{vendorId}")
    public ResponseEntity<List<Booking>> getPendingBookingsForVendor(@PathVariable Long vendorId) {
        return ResponseEntity.ok(bookingService.getPendingBookingsForVendor(vendorId));
    }

    
   //vendor views incomming bookng req
    @PutMapping("/status/{bookingId}")
    public ResponseEntity<Booking> updateBookingStatus(
            @PathVariable Long bookingId, 
            @RequestParam String status) {
        return ResponseEntity.ok(bookingService.updateBookingStatus(bookingId, status));
    }

    
    
}
