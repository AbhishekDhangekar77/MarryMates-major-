package com.marrymates.service;

import com.marrymates.dto.BookingDTO;
import com.marrymates.model.Booking;
import com.marrymates.model.BookingStatus;
import com.marrymates.model.Client;
import com.marrymates.model.Vendor;
import com.marrymates.repository.BookingRepository;
import com.marrymates.repository.ClientRepository;
import com.marrymates.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private VendorRepository vendorRepository;

    public Booking createBooking(Booking booking) {
        if (booking.getEventDate().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Event date cannot be in the past.");
        }
        booking.setStatus(BookingStatus.PENDING); // Default status
        return bookingRepository.save(booking);
    }

    public List<BookingDTO> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private BookingDTO convertToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.setId(booking.getId());
        dto.setBookingDate(booking.getBookingDate());
        dto.setEventDate(booking.getEventDate());
        dto.setRemarks(booking.getRemarks());
        dto.setStatus(booking.getStatus());
        dto.setClientId(booking.getClient().getId());
        dto.setVendorId(booking.getVendor().getId());
        dto.setPrice(booking.getPrice());

        // Fetch and set client and vendor details
        Client client = clientRepository.findById(booking.getClient().getId()).orElse(null);
        Vendor vendor = vendorRepository.findById(booking.getVendor().getId()).orElse(null);
        if (client != null) {
            dto.setClientName(client.getName());
        }
        if (vendor != null) {
            dto.setVendorName(vendor.getName());
        }

        return dto;
    }

    public List<Booking> getBookingsByVendor(Long vendorId) {
        return bookingRepository.findByVendor_Id(vendorId);
    }

    public Booking updateBookingStatus(Long id, BookingStatus status) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found!"));
        booking.setStatus(status);
        return bookingRepository.save(booking);
    }

    public Booking confirmBooking(Long id) {
        Booking booking = bookingRepository.findById(id)
        		.orElseThrow(() -> new RuntimeException("Booking Not Found!"));

        if (booking.getStatus() != BookingStatus.PENDING && booking.getStatus() != BookingStatus.CANCELLED) {
            throw new RuntimeException("Only pending bookings can be approved");
        }
        
//        
//        if (!booking.getStatus().equals(BookingStatus.PENDING)) {
//            throw new RuntimeException("Only pending bookings can be approved");
//        }
//
//        if (booking.getStatus().equals(BookingStatus.CANCELLED)) {
//            throw new RuntimeException("Cancelled bookings cannot be approved");
//        }

        booking.setStatus(BookingStatus.CONFIRMED);
        return bookingRepository.save(booking);
    }

    public void deleteBooking(Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new RuntimeException("Booking not found!");
        }
        bookingRepository.deleteById(id);
    }

    public List<Booking> getBookingsByClientId(Long clientId) {
        return bookingRepository.findByClientId(clientId);
    }

    public Booking cancelBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found!"));
        booking.setStatus(BookingStatus.CANCELLED);
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found!"));

        if (booking.getStatus() == BookingStatus.CANCELLED) {
            throw new RuntimeException("Cannot update a cancelled booking!");
        }

        // Update editable fields
        if (updatedBooking.getEventDate() != null) {
            booking.setEventDate(updatedBooking.getEventDate());
        }
        if (updatedBooking.getRemarks() != null) {
            booking.setRemarks(updatedBooking.getRemarks());
        }

        return bookingRepository.save(booking);
    }

    public List<Booking> getPendingBookingsForVendor(Long vendorId) {
        return bookingRepository.findPendingBookingsByVendor(vendorId);
    }

    public Booking updateBookingStatus(Long bookingId, String status) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with ID: " + bookingId));

        if (!BookingStatus.PENDING.equals(booking.getStatus())) {
            throw new RuntimeException("Booking status can only be updated if it's PENDING.");
        }

        // Validate and convert the input status to BookingStatus
        try {
            BookingStatus newStatus = BookingStatus.valueOf(status.toUpperCase());
            if (newStatus != BookingStatus.ACCEPTED && newStatus != BookingStatus.DECLINED) {
                throw new IllegalArgumentException();
            }
            booking.setStatus(newStatus);
        } catch (IllegalArgumentException ex) {
            throw new RuntimeException("Invalid status. Allowed values are ACCEPTED or DECLINED.");
        }

        return bookingRepository.save(booking);
    }
}