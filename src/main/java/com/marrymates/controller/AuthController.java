package com.marrymates.controller;

import com.marrymates.model.Status;

import com.marrymates.model.LoginRequest;
import com.marrymates.model.Role;
import com.marrymates.model.User;
import com.marrymates.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Enable CORS for this controller
public class AuthController {

    @Autowired
    private AuthService authService;


    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {
        	System.out.println("In user signup" + user);
            User registeredUser = authService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        String role = loginRequest.getRole(); // Get the role from the request
        
        Optional<User> user = authService.loginUser(username, password);
        if (user.isPresent()) {
        	if (user.get().getRole().name().equalsIgnoreCase(role)) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(403).body("Role mismatch");
            }
        }
        return ResponseEntity.status(401).body("Invalid username or password");
    }
    
    @GetMapping("/allUsers")
    public ResponseEntity<?> getAllUsers(){
    	try {
    	List<User> users = authService.getAllUsers();
    	return ResponseEntity.ok(users);
    }catch (Exception e){
    	return ResponseEntity.status(500).body("Error: " + e.getMessage());
    	}
    }
    
    @PutMapping("/updateUser/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        try {
            User user = authService.updateUser(id, updatedUser);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try {
            authService.deleteUser(id);
            return ResponseEntity.ok("User with ID " + id + " has been deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    
    
    //admin (manage vendors)
    
    
        @PutMapping("/approveVendor/{id}")
        public ResponseEntity<?> approveVendor(@PathVariable Long id) {
            try {
                authService.updateVendorStatus(id, Status.ACTIVE);
                return ResponseEntity.ok("Vendor approved successfully");
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

        @PutMapping("/rejectVendor/{id}")
        public ResponseEntity<?> rejectVendor(@PathVariable Long id) {
            try {
                authService.updateVendorStatus(id, Status.REJECTED);
                return ResponseEntity.ok("Vendor rejected successfully");
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

        @GetMapping("/vendors")
        public ResponseEntity<?> getAllVendors() {
            try {
                List<User> vendors = authService.getAllVendors();
                return ResponseEntity.ok(vendors);
            } catch (Exception e) {
                return ResponseEntity.status(500).body("Error: " + e.getMessage());
            }
        }
        
        //admin to manage clients
        


        @PostMapping("/createClient")
        public ResponseEntity<?> createClient(@RequestBody User client) {
            try {
                client.setRole(Role.CLIENT); // Ensure the role is CLIENT
                User registeredClient = authService.registerUser(client);
                return ResponseEntity.ok(registeredClient);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

        @GetMapping("/clients")
        public ResponseEntity<?> getAllClients() {
            try {
                List<User> clients = authService.getUsersByRole(Role.CLIENT);
                return ResponseEntity.ok(clients);
            } catch (Exception e) {
                return ResponseEntity.status(500).body("Error: " + e.getMessage());
            }
        }

        @PutMapping("/updateClient/{id}")
        public ResponseEntity<?> updateClient(@PathVariable Long id, @RequestBody User updatedClient) {
            try {
                User client = authService.updateUser(id, updatedClient);
                return ResponseEntity.ok(client);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

        @DeleteMapping("/deleteClient/{id}")
        public ResponseEntity<?> deleteClient(@PathVariable Long id) {
            try {
                authService.deleteUser(id); // Reuse the existing delete logic
                return ResponseEntity.ok("Client with ID " + id + " has been deleted successfully.");
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

        
        
        @PostMapping("/reset-password")
        public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
            String email = request.get("email");
            authService.sendPasswordResetLink(email);
            return ResponseEntity.ok("Password reset link has been sent to your email.");
        }

        @PostMapping("/reset-password/confirm")
        public ResponseEntity<?> confirmResetPassword(@RequestBody Map<String, String> request) {
            String token = request.get("token");
            String newPassword = request.get("newPassword");
            authService.resetPassword(token, newPassword);
            return ResponseEntity.ok("Password has been reset successfully.");
        }
        
      
    }



