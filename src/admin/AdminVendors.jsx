import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const AdminVendors = () => {
  const [vendors, setVendors] = useState([]); // Ensure initial state is an empty array
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    userName: "",
    contactNumber: "",
    email: "",
    address: "",
    managerName: "",
    managerContact: "",
    password: "",
    createdAt: new Date().toISOString()
  });

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/vendors/getAll");
      console.log("Vendors response:", response.data); // Log the response
      if (Array.isArray(response.data)) {
        // Extract only necessary fields to avoid deep nesting
        const simplifiedVendors = response.data.map(vendor => ({
          id: vendor.id,
          name: vendor.name,
          userName: vendor.userName,
          contactNumber: vendor.contactNumber,
          email: vendor.email,
          address: vendor.address,
          managerName: vendor.managerName,
          managerContact: vendor.managerContact,
          password: vendor.password
        }));
        setVendors(simplifiedVendors);
        console.log("Simplified vendors:", simplifiedVendors); // Log the simplified vendors
      } else {
        console.error("Vendors response is not an array:", response.data);
        setVendors([]);
      }
    } catch (error) {
      console.error("Error fetching vendors", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/vendors/delete/${id}`);
      fetchVendors();
    } catch (error) {
      console.error("Error deleting vendor", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!form.name || !form.userName || !form.contactNumber || !form.email || !form.address || !form.managerName || !form.managerContact || !form.password) {
        alert("Please fill in all required fields.");
        return;
      }

      // Log form data to check for excessive nesting or circular references
      console.log("Form data:", JSON.stringify(form, null, 2));

      if (editData) {
        await axios.put(`http://localhost:8080/api/vendors/profile/${editData.id}`, form);
      } else {
        await axios.post("http://localhost:8080/api/vendors/add", form);
      }
      fetchVendors();
      handleClose();
    } catch (error) {
      console.error("Error saving vendor", error);
    }
  };

  const handleOpen = (vendor = null) => {
    setEditData(vendor);
    setForm(vendor || {
      name: "",
      userName: "",
      contactNumber: "",
      email: "",
      address: "",
      managerName: "",
      managerContact: "",
      password: "",
      createdAt: new Date().toISOString()
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Vendor</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4}>Loading...</TableCell>
              </TableRow>
            ) : (
              vendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell>{vendor.id}</TableCell>
                  <TableCell>{vendor.name}</TableCell>
                  <TableCell>{vendor.email}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpen(vendor)}>Edit</Button>
                    <Button color="secondary" onClick={() => handleDelete(vendor.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editData ? "Edit Vendor" : "Add Vendor"}</DialogTitle>
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
            name="userName"
            label="Username"
            type="text"
            fullWidth
            value={form.userName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="contactNumber"
            label="Contact Number"
            type="text"
            fullWidth
            value={form.contactNumber}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            value={form.address}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="managerName"
            label="Manager Name"
            type="text"
            fullWidth
            value={form.managerName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="managerContact"
            label="Manager Contact"
            type="text"
            fullWidth
            value={form.managerContact}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={form.password}
            onChange={handleChange}
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

export default AdminVendors;