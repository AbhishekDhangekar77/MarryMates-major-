import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  card: {
    margin: '10px',
    padding: '10px',
  },
  button: {
    marginTop: '10px',
    marginRight: '10px',
  },
});

const VendorBookings = () => {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);
  const [vendorId, setVendorId] = useState(null);

  useEffect(() => {
    const storedVendorData = localStorage.getItem('user'); // Assuming 'user' is the key
    if (storedVendorData) {
      const vendorData = JSON.parse(storedVendorData);
      const vendorId = vendorData.id;
      console.log("Retrieved vendorId from localStorage:", vendorId); // Debugging log
      setVendorId(vendorId);
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

  const filteredBookings = bookings.filter((booking) => booking.vendorId === vendorId);

  const handleApprove = (id) => {
    axios.put(`http://localhost:8080/api/bookings/updateStatus/${id}?status=ACCEPTED`)
      .then(response => {
        setBookings(bookings.map(booking => booking.id === id ? { ...booking, status: 'ACCEPTED' } : booking));
      })
      .catch(error => {
        console.error('There was an error approving the booking!', error);
      });
  };

  const handleReject = (id) => {
    axios.put(`http://localhost:8080/api/bookings/updateStatus/${id}?status=DECLINED`)
      .then(response => {
        setBookings(bookings.map(booking => booking.id === id ? { ...booking, status: 'DECLINED' } : booking));
      })
      .catch(error => {
        console.error('There was an error rejecting the booking!', error);
      });
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Manage Bookings
      </Typography>
      <Grid container spacing={3}>
        {filteredBookings.map((booking) => (
          <Grid item xs={12} sm={6} md={4} key={booking.id}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">
                  Booking ID: {booking.id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Client: {booking.clientName || 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Event Date: {new Date(booking.eventDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Status: {booking.status}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Remarks: {booking.remarks}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => handleApprove(booking.id)}
                  disabled={booking.status !== 'PENDING'}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={() => handleReject(booking.id)}
                  disabled={booking.status !== 'PENDING'}
                >
                  Reject
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VendorBookings;