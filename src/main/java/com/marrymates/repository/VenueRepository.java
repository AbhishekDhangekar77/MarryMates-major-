package com.marrymates.repository;

import com.marrymates.model.Venue;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
	
	
	@Query("SELECT v FROM Venue v WHERE "
		     + "(:location IS NULL OR v.location = :location) AND "
		     + "(:capacity IS NULL OR v.capacity >= :capacity) AND "
		     + "(:minPrice IS NULL OR v.price >= :minPrice) AND "
		     + "(:maxPrice IS NULL OR v.price <= :maxPrice) AND "
		     + "v.availability = true")
		List<Venue> findAvailableVenues(
		    @Param("location") String location,
		    @Param("capacity") Integer capacity,
		    @Param("minPrice") Double minPrice,
		    @Param("maxPrice") Double maxPrice
		);

	
}
