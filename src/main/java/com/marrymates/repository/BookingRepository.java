package com.marrymates.repository;

import com.marrymates.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByClient_Id(Long clientId);
    List<Booking> findByVendor_Id(Long vendorId);
    
    @Query("SELECT b FROM Booking b WHERE b.client.id = :clientId")
    List<Booking> findByClientId(@Param("clientId") Long clientId);
    
    
    //reprts and analytics
    
    @Query("SELECT b FROM Booking b WHERE b.eventDate BETWEEN :startDate AND :endDate")
    List<Booking> findBookingsByDateRange(@Param("startDate") LocalDateTime startDate,
                                          @Param("endDate") LocalDateTime endDate);
    
    

    @Query("SELECT SUM(b.price) FROM Booking b WHERE b.vendor.id = :vendorId")
    Double findTotalRevenueByVendor(Long vendorId);
    
    //vendor availability
    @Query("SELECT b FROM Booking b WHERE b.vendor.id = :vendorId AND b.status = 'PENDING'")
    List<Booking> findPendingBookingsByVendor(@Param("vendorId") Long vendorId);

    
    
}
