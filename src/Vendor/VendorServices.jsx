import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
  card: {
    margin: '10px',
    padding: '10px',
  },
});

const VendorServices = () => {
  const classes = useStyles();
  const [vendorId, setVendorId] = useState(null);
  const [servicesOffered, setServicesOffered] = useState('');

  useEffect(() => {
    const storedVendorData = localStorage.getItem('user'); // Assuming 'user' is the key
    if (storedVendorData) {
      const vendorData = JSON.parse(storedVendorData);
      const vendorId = vendorData.id;
      console.log("Retrieved vendorId from localStorage:", vendorId); // Debugging log
      setVendorId(vendorId);
    }
  }, []);

  const handleServicesOfferedChange = (e) => {
    setServicesOffered(e.target.value);
  };

  const handleUpdateServicesOffered = (e) => {
    e.preventDefault();
    if (vendorId) {
      const serviceData = {
        vendorId,
        servicesOffered,
      };
      axios.patch(`http://localhost:8080/api/vendors/updateVendorServices/${vendorId}`, serviceData)
        .then(response => {
          console.log('Services offered updated successfully');
          alert("Services Updated Successfully");
        })
        .catch(error => {
          console.error('There was an error updating the services offered!', error);
        });
    } else {
      console.error('Vendor ID is not available');
    }
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Manage Services
      </Typography>
      <form className={classes.form} onSubmit={handleUpdateServicesOffered} style={{ marginTop: '20px' }}>
        <TextField
          label="Vendor ID"
          name="vendorId"
          value={vendorId || ''}
          className={classes.textField}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Service Offered"
          name="servicesOffered"
          value={servicesOffered}
          onChange={handleServicesOfferedChange}
          className={classes.textField}
          required
        />
        <Button variant="contained" color="secondary" type="submit" className={classes.button}>
          Update Services Offered
        </Button>
      </form>
    </Container>
  );
};

export default VendorServices;