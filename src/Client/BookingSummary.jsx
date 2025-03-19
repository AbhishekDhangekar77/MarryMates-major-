import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const BookingSummary = () => {
  const [bookings, setBookings] = useState([]);
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    const storedClientData = localStorage.getItem('user'); // Assuming 'user' is the key
    if (storedClientData) {
      const clientData = JSON.parse(storedClientData);
      const clientId = clientData.id;
      console.log("Retrieved clientId from localStorage:", clientId); // Debugging log
      setClientId(clientId);
      fetchBookings();
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bookings');
      console.log('Fetched bookings:', response.data); // Debugging log
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings', error);
    }
  };

  const filteredBookings = bookings.filter((booking) => booking.clientId === clientId);

  return (
    <div>
      <h2>Booking Summary</h2>
      {filteredBookings.length > 0 ? (
        <div style={styles.bookingsContainer}>
          {filteredBookings.map((booking) => (
            <Card key={booking.id} style={styles.bookingCard}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Client: {booking.clientName || 'N/A'}
                </Typography>
                <Typography variant="h6" component="div">
                  Vendor: {booking.vendorName || 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {booking.price !== undefined ? booking.price : 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Status: {booking.status || 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Booking Date: {booking.bookingDate ? new Date(booking.bookingDate).toLocaleString() : 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Event Date: {booking.eventDate ? new Date(booking.eventDate).toLocaleString() : 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Remarks: {booking.remarks || 'N/A'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

// Inline CSS Styles
const styles = {
  bookingsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  bookingCard: {
    width: '300px',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default BookingSummary;