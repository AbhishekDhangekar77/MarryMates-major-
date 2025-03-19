import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';

const ClientEventDetails = () => {
  const ProfileData1 = JSON.parse(localStorage.getItem('user')); // Parse the stored user data
  const [event, setEvent] = useState({
    client: {
      id: ProfileData1.id, 
      name: ProfileData1.name,
      email: ProfileData1.email,
      contactNumber: ProfileData1.contactNumber,
      address: ProfileData1.address,
    },
    vendor: {
      id: "",
      name: "",
      userName: "",
      contactNumber: "",
      email: "",
      address: "",
      managerName: "",
      managerContact: "",
    },
    price: 0,
    status: "PENDING",
    bookingDate: "",
    eventDate: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/vendors/getAll");
        console.log("Fetched vendors:", response.data); // Debugging log
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split(".");
    if (child) {
      setEvent((prevEvent) => ({
        ...prevEvent,
        [parent]: {
          ...prevEvent[parent],
          [child]: value,
        },
      }));
    } else {
      setEvent({ ...event, [name]: value });
    }
  };

  const handleVendorChange = (e) => {
    const selectedVendorId = e.target.value;
    const selectedVendor = vendors.find(vendor => vendor.id === parseInt(selectedVendorId));
    console.log("Selected vendor:", selectedVendor); // Debugging log
    setEvent((prevEvent) => ({
      ...prevEvent,
      vendor: selectedVendor || { id: "", name: "", userName: "", contactNumber: "", email: "", address: "", managerName: "", managerContact: "" },
    }));
    if (!selectedVendorId) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        vendorId: "Vendor is required!",
      }));
    } else {
      setErrors((prevErrors) => {
        const { vendorId, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!event.client.name.trim()) tempErrors.clientName = "Client's Name is required!";
    if (!event.client.email.trim()) tempErrors.clientEmail = "Client's Email is required!";
    if (!event.client.contactNumber.trim()) tempErrors.clientContactNumber = "Client's Contact Number is required!";
    if (!event.vendor.id) tempErrors.vendorId = "Vendor is required!";
    if (!event.price || event.price <= 0) tempErrors.price = "Please enter a valid price!";
    if (!event.eventDate) tempErrors.eventDate = "Event Date is required!";
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const bookingData = {
        client: { id: event.client.id },
        vendor: { id: event.vendor.id },
        price: event.price,
        status: event.status,
        bookingDate: new Date().toISOString(),
        eventDate: new Date(event.eventDate).toISOString(),
        remarks: event.remarks,
      };

      console.log("Booking data:", bookingData);

      try {
        const response = await axios.post("http://localhost:8080/api/bookings/create", bookingData);
        console.log("Event created:", response.data);
        setSubmitted(true);
      } catch (error) {
        console.error("Error creating event:", error.response ? error.response.data : error.message);
      }
    }
  };

  const handleDone = () => {
    setConfirmed(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Event Details</h2>

      {!confirmed && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Client's Name</label>
            <input
              type="text"
              name="client.name"
              placeholder="Enter Client's Name"
              value={event.client.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.clientName && <span style={styles.error}>{errors.clientName}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Client's Email</label>
            <input
              type="email"
              name="client.email"
              placeholder="Enter Client's Email"
              value={event.client.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.clientEmail && <span style={styles.error}>{errors.clientEmail}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Client's Contact Number</label>
            <input
              type="text"
              name="client.contactNumber"
              placeholder="Enter Client's Contact Number"
              value={event.client.contactNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.clientContactNumber && <span style={styles.error}>{errors.clientContactNumber}</span>}
          </div>

          <FormControl fullWidth margin="dense">
            <InputLabel id="vendor-label">Vendor</InputLabel>
            <Select
              labelId="vendor-label"
              name="vendor.id"
              value={event.vendor.id}
              onChange={handleVendorChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {vendors.map((vendor) => (
                <MenuItem key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.vendorId && <span style={styles.error}>{errors.vendorId}</span>}

          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={event.price}
            onChange={handleChange}
          />
          {errors.price && <span style={styles.error}>{errors.price}</span>}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={event.eventDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {errors.eventDate && <span style={styles.error}>{errors.eventDate}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Remarks</label>
            <textarea
              name="remarks"
              placeholder="Enter Remarks"
              value={event.remarks}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>Save</button>
        </form>
      )}

      {submitted && (
        <div style={styles.preview}>
          <h3 style={styles.previewHeading}>Event Summary</h3>
          <p><strong>Client's Name:</strong> {event.client.name}</p>
          <p><strong>Client's Email:</strong> {event.client.email}</p>
          <p><strong>Client's Contact Number:</strong> {event.client.contactNumber}</p>
          <p><strong>Vendor's Name:</strong> {event.vendor.name}</p>
          <p><strong>Vendor's Contact Number:</strong> {event.vendor.contactNumber}</p>
          <p><strong>Price:</strong> ${event.price}</p>
          <p><strong>Event Date:</strong> {event.eventDate}</p>
          <p><strong>Remarks:</strong> {event.remarks}</p>
          {!confirmed && (
            <Button variant="contained" color="primary" onClick={handleDone} style={styles.doneBtn}>Done</Button>
          )}
        </div>
      )}

      {confirmed && (
        <div style={styles.confirmation}>
          <h3>Booking Confirmed</h3>
        </div>
      )}
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  submitBtn: {
    background: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "16px",
    fontWeight: "bold",
  },
  submitBtnHover: {
    background: "#218838",
  },
  preview: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    background: "#f8f9fa",
    textAlign: "left",
    color: "black", // Set summary font color to black
  },
  previewHeading: {
    marginBottom: "10px",
    color: "#007bff",
  },
  doneBtn: {
    marginTop: "10px",
    background: "#28a745",
    color: "white",
  },
  confirmation: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    background: "#f8f9fa",
    textAlign: "center",
    color: "black",
  },
};

export default ClientEventDetails;
