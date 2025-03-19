package com.marrymates.repository;

import com.marrymates.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByRecipientIdAndIsRead(Long recipientId, boolean isRead);
    List<Notification> findByRecipientId(Long recipientId);
}
