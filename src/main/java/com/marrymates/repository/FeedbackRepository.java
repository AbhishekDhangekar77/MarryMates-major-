package com.marrymates.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.marrymates.model.ClientFeedback;

public interface FeedbackRepository extends JpaRepository<ClientFeedback, Long> {
}


