package com.marrymates.service;

import com.marrymates.model.Venue;
import com.marrymates.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {

    @Autowired
    private VenueRepository venueRepository;

    public Venue addVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    public Venue updateVenue(Long id, Venue updatedVenue) {
        Optional<Venue> existingVenueOptional = venueRepository.findById(id);

        if (!existingVenueOptional.isPresent()) {
            throw new IllegalArgumentException("Venue with ID " + id + " not found");
        }

        Venue existingVenue = existingVenueOptional.get();
        if (updatedVenue.getName() != null) {
            existingVenue.setName(updatedVenue.getName());
        }
        if (updatedVenue.getLocation() != null) {
            existingVenue.setLocation(updatedVenue.getLocation());
        }
        if (updatedVenue.getCapacity() > 0) {
            existingVenue.setCapacity(updatedVenue.getCapacity());
        }
        if (updatedVenue.getPrice() > 0) {
            existingVenue.setPrice(updatedVenue.getPrice());
        }
        existingVenue.setAvailability(updatedVenue.isAvailability());

        return venueRepository.save(existingVenue);
    }

    public void deleteVenue(Long id) {
        venueRepository.deleteById(id);
    }
    
    
    public List<Venue> getAvailableVenues(String location, Integer capacity, Double minPrice, Double maxPrice) {
        return venueRepository.findAvailableVenues(location, capacity, minPrice, maxPrice);
    }
}
