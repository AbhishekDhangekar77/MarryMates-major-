package com.marrymates.service;
import com.marrymates.model.Status;
import java.util.Optional;
import java.util.UUID;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marrymates.model.PasswordResetToken;
import com.marrymates.model.Role;
import com.marrymates.model.User;
import com.marrymates.repository.PasswordResetTokenRepository;
import com.marrymates.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    @Autowired
    private EmailService emailService;

    public User registerUser(User user) {
      
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String username, String password) {
     
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
    
    public List<User> getAllUsers(){
    	return userRepository.findAll();
    }
    
    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUserOptional = userRepository.findById(id);
        
        if (!existingUserOptional.isPresent()) {
            throw new IllegalArgumentException("User with ID " + id + " not found");
        }
        
        User existingUser = existingUserOptional.get();
        
        // Update fields as necessary
        if(updatedUser.getName() != null) {
        	existingUser.setName(updatedUser.getName());
        }
        
        if (updatedUser.getUsername() != null) {
            existingUser.setUsername(updatedUser.getUsername());
        }
        if (updatedUser.getEmail() != null) {
            existingUser.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getPassword() != null) {
            existingUser.setPassword(updatedUser.getPassword());
        }
        
        if (updatedUser.getRole() != null) {
        	existingUser.setRole(updatedUser.getRole());
        }
        
        if (updatedUser.getStatus() !=null) {
        	existingUser.setStatus(updatedUser.getStatus());
        }
        
       
        // Save the updated user back to the database
        return userRepository.save(existingUser);
    }
    
    public void deleteUser(Long id) {
        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent()) {
            throw new IllegalArgumentException("User with ID " + id + " not found.");
        }

        User user = userOptional.get();
        user.setDeleted(true);   //marks users as deleted
        userRepository.save(user);  //saves the updated users
    }
    
    
    //admin (manage vendors)
    
    @Transactional
    public void updateVendorStatus(Long id, Status status) {
        Optional<User> vendor = userRepository.findById(id);

        if (!vendor.isPresent() || vendor.get().getRole() != Role.VENDOR) {
            throw new IllegalArgumentException("Vendor not found or invalid ID");
        }

        userRepository.updateVendorStatus(id, status);
    }

    public List<User> getAllVendors() {
        return userRepository.findAllVendors();
    }

    

    public List<User> getUsersByRole(Role role) {
        return userRepository.findAll().stream()
                .filter(user -> user.getRole() == role && !user.getDeleted())
                .toList();
    }

	
    public void sendPasswordResetLink(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (!userOptional.isPresent()) {
            throw new RuntimeException("User not found");
        }

        User user = userOptional.get();
        String token = UUID.randomUUID().toString();
        PasswordResetToken resetToken = new PasswordResetToken(token, user);
        tokenRepository.save(resetToken);

        String resetLink = "http://localhost:8080/reset-password?token=" + token;
        emailService.sendEmail(email, "Password Reset Request", "Click the link to reset your password: " + resetLink);
    }

    public void resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = tokenRepository.findByToken(token);
        if (resetToken == null || resetToken.isExpired()) {
            throw new RuntimeException("Invalid or expired token");
        }

        User user = resetToken.getUser();
        user.setPassword(newPassword); // Make sure to hash the password before saving
        userRepository.save(user);

        tokenRepository.delete(resetToken);
    }

    
}
