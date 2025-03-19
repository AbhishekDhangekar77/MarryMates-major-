import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VendorNavbar from './VendorNavbar';
import axios from 'axios';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

import '../custom.css';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #e91e63",
    borderRadius: "10px",
    background: "#fff5f8",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  card: {
    margin: '10px',
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: "20px",
    background: "#e91e63",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    transition: "0.3s",
    display: "inline-block",
    width: "200px",
    height: "200px",
    lineHeight: "160px",
    textAlign: "center",
    '&:hover': {
      background: "#d81b60",
    },
  },
});

const Vendor = () => {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);
  const vendorId = 5; // Replace with actual vendor ID from authentication context

  useEffect(() => {
    axios.get(`http://localhost:8080/api/bookings/vendor/${vendorId}`)
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bookings!', error);
      });
  }, [vendorId]);

  return (
    <>
      <VendorNavbar />
      <Container className={classes.root}>
        <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
          Vendor Dashboard
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          <Link to="/Vendor/VendorServices" className={classes.link}>
            <Button className={classes.button}>
              Update Services
            </Button>
          </Link>
          <Link to="/Vendor/VendorProfile" className={classes.link}>
            <Button className={classes.button}>
              Manage Profile
            </Button>
          </Link>
          <Link to="/Vendor/VendorBookings" className={classes.link}>
            <Button className={classes.button}>
              Manage Bookings
            </Button>
          </Link>
          <Link to="/Vendor/VendorBills" className={classes.link}>
            <Button className={classes.button}>
              Manage Bills
            </Button>
          </Link>
        </div>
        <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
          Bookings
        </Typography>
        <Grid container spacing={3}>
          {bookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6">
                    Booking ID: {booking.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Client: {booking.client ? booking.client.name : 'N/A'}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Vendor;