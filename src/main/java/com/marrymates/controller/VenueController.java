package com.marrymates.controller;

import com.marrymates.model.Venue;
import com.marrymates.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/venues")
@CrossOrigin(origins = "*") // Enable CORS for this controller
public class VenueController {

    @Autowired
    private VenueService venueService;

    @PostMapping("/add")
    public ResponseEntity<?> addVenue(@RequestBody Venue venue) {
    	System.out.println(venue.toString());
        try {
            Venue savedVenue = venueService.addVenue(venue);
            return ResponseEntity.ok(savedVenue);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllVenues() {
        try {
            List<Venue> venues = venueService.getAllVenues();
            return ResponseEntity.ok(venues);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateVenue(@PathVariable Long id, @RequestBody Venue updatedVenue) {
        try {
            Venue venue = venueService.updateVenue(id, updatedVenue);
            return ResponseEntity.ok(venue);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVenue(@PathVariable Long id) {
        try {
            venueService.deleteVenue(id);
            return ResponseEntity.ok("Venue with ID " + id + " has been deleted.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
    
    
    //Client browses Venues 


        @GetMapping("/available")
        public List<Venue> getAvailableVenues(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Integer capacity,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice
        ) {
            return venueService.getAvailableVenues(location, capacity, minPrice, maxPrice);
        }
    

}
