package com.marrymates.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marrymates.model.ClientFeedback;
import com.marrymates.repository.FeedbackRepository;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    
    public ClientFeedback saveFeedback(ClientFeedback feedback) {
        return feedbackRepository.save(feedback);
    }

   
    public List<ClientFeedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }
}

