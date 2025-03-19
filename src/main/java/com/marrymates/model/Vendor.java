package com.marrymates.model;

import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String userName;

    @Column(nullable = false)
    private String contactNumber;

    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String address;
    
    @Column(nullable = false)
    private String managerName;
    
    @Column(nullable = true)
    private String managerContact;

   @Enumerated(EnumType.STRING)
    private Status status = Status.PENDING;

    @Column(nullable = true)
    private String servicesOffered; // New Field

    
    
    @OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference ("booking-vendor")
    private List<Booking> bookings;
    // Default Constructor
    public Vendor() {}

    // Parameterized Constructor
    public Vendor(String name, String userName,String contactNumber, String email, String address, Status status,String managerName,String managerContact) {
        this.name = name;
        this.userName=userName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.address = address;
       // this.status = status;
        this.managerName=managerName;
        this.managerContact=managerContact;
        
     
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public String getServicesOffered() {
		return servicesOffered;
	}

	public void setServicesOffered(String servicesOffered) {
		this.servicesOffered = servicesOffered;
	}

	public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    
    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getManagerContact() {
		return managerContact;
	}

	public void setManagerContact(String managerContact) {
		this.managerContact = managerContact;
	}

	@Override
	public String toString() {
		return "Vendor [id=" + id + ", name=" + name + ", userName=" + userName + ", contactNumber=" + contactNumber
				+ ", email=" + email + ", password=" + password + ", address=" + address + ", managerName="
				+ managerName + ", managerContact=" + managerContact + ", status=" + status + ", servicesOffered="
				+ servicesOffered + ", bookings=" + bookings + "]";
	}
	
		
//	
//	@Override
//    public String toString() {
//        return "Vendor{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", contactNumber='" + contactNumber + '\'' +
//                ", email='" + email + '\'' +
//                ", address='" + address + '\'' +
//               // ", status=" + status +
//                ", managerName='" + managerName + '\'' +
//                ", managerContact='" + managerContact + '\'' +
//                ", userName='" + userName + '\'' +
//                
//                '}';
//    }
//	
	
	
}