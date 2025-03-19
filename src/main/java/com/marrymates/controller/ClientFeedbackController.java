package com.marrymates.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.marrymates.model.ClientFeedback;
import com.marrymates.service.FeedbackService;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "*") // Allow frontend access
public class ClientFeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ClientFeedback submitFeedback(@RequestBody ClientFeedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }

    @GetMapping
    public List<ClientFeedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }
}

