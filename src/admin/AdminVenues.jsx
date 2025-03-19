import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from "@mui/material";

const AdminVenues = () => {
  const [venues, setVenues] = useState([]); // Ensure initial state is an empty array
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    location: "",
    capacity: 0,
    price: 0,
    availability: true
  });

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/venues/all");
      console.log("Venues response:", response.data); // Log the response
      if (Array.isArray(response.data)) {
        setVenues(response.data);
      } else {
        console.error("Venues response is not an array:", response.data);
        setVenues([]);
      }
    } catch (error) {
      console.error("Error fetching venues", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/venues/delete/${id}`);
      fetchVenues();
    } catch (error) {
      console.error("Error deleting venue", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!form.name || !form.location || form.capacity <= 0 || form.price <= 0) {
        alert("Please fill in all required fields.");
        return;
      }

      // Log form data to check for excessive nesting or circular references
      console.log("Form data:", JSON.stringify(form, null, 2));

      if (editData) {
        await axios.put(`http://localhost:8080/api/venues/update/${editData.id}`, form);
      } else {
        console.log("Form data:", form);
        await axios.post("http://localhost:8080/api/venues/add", form);
      }
      fetchVenues();
      handleClose();
    } catch (error) {
      console.error("Error saving venue", error);
    }
  };

  const handleOpen = (venue = null) => {
    setEditData(venue);
    setForm(venue || {
      id: null,
      name: "",
      location: "",
      capacity: 0,
      price: 0,
      availability: true
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Venue</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Availability</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7}>Loading...</TableCell>
              </TableRow>
            ) : (
              venues.map((venue) => (
                <TableRow key={venue.id}>
                  <TableCell>{venue.id}</TableCell>
                  <TableCell>{venue.name}</TableCell>
                  <TableCell>{venue.location}</TableCell>
                  <TableCell>{venue.capacity}</TableCell>
                  <TableCell>{venue.price}</TableCell>
                  <TableCell>{venue.availability ? "Available" : "Not Available"}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpen(venue)}>Edit</Button>
                    <Button color="secondary" onClick={() => handleDelete(venue.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editData ? "Edit Venue" : "Add Venue"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            value={form.location}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="capacity"
            label="Capacity"
            type="number"
            fullWidth
            value={form.capacity}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={form.price}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.availability}
                onChange={handleChange}
                name="availability"
                color="primary"
              />
            }
            label="Availability"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleSubmit}>{editData ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminVenues;