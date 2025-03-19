package com.marrymates.model;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ClientFeedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clientName;
    private String vendorName;
    private String clientFeedback;
    private String serviceFeedback;
}


