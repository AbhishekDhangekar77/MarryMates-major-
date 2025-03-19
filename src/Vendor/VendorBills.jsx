import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
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
});

const VendorBills = () => {
  const classes = useStyles();
  const [revenue, setRevenue] = useState(0);
  const vendorId = 5; // Replace with actual vendor ID from authentication context

  useEffect(() => {
    axios.get(`http://localhost:8080/api/admin/reports/revenue/${vendorId}`)
      .then(response => {
        setRevenue(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the revenue!', error);
      });
  }, [vendorId]);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Manage Bills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                Total Revenue
              </Typography>
              <Typography variant="body2" color="textSecondary">
                INR {revenue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VendorBills;