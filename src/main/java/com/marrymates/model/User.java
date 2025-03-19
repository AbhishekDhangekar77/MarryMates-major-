package com.marrymates.model;

import jakarta.persistence.*;

import lombok.Getter;

import lombok.Setter;




@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
    
    @Column(nullable = false)
    private String contactNumber;
    
    @Column(nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)
    private Status status = Status.PENDING;
    
    @Column(name = "is_deleted", nullable = false)
    private Boolean deleted = false; 
    // Primitive type(boolean cannnot hold null)
    //Wrapper Class (Boolean can hold null )

    
    //DEf const
    public User() {
    	this.deleted=false;  
    }
   

//	// Getters and Setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public Role getRole() {
//        return role;
//    }
//
//    public void setRole(Role role) {
//        this.role = role;
//    }
//
//    @Enumerated(EnumType.STRING)
//    public Status getStatus() {
//        return status;
//    }
//
//    @Enumerated(EnumType.STRING)
//    public void setStatus(Status status) {
//        this.status = status;
//    }
//    
//    
//    public boolean getDeleted() {
//		return deleted;
//	}
//
//	public void setDeleted(boolean deleted) {
//		this.deleted = deleted;
//	}
//}

// enum Role {
//    ADMIN, VENDOR, CLIENT
//}
//
//
//
//enum Status {
//    ACTIVE, PENDING, REJECTED
//}

}
