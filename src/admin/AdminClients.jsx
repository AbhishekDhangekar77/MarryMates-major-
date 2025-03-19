import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    userName: "",
    password: "",
    createdAt: new Date().toISOString()
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/clients/getAll");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/clients/delete/${id}`);
      fetchClients();
    } catch (error) {
      console.error("Error deleting client", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!form.name || !form.email || !form.contactNumber || !form.address || !form.userName || !form.password) {
        alert("Please fill in all required fields.");
        return;
      }

      if (editData) {
        await axios.put(`http://localhost:8080/api/clients/update/${editData.id}`, form);
      } else {
        await axios.post("http://localhost:8080/api/clients/add", form);
      }
      fetchClients();
      handleClose();
    } catch (error) {
      console.error("Error saving client", error);
    }
  };

  const handleOpen = (client = null) => {
    setEditData(client);
    setForm(client || {
      name: "",
      email: "",
      contactNumber: "",
      address: "",
      userName: "",
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
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Client</Button>
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
              clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpen(client)}>Edit</Button>
                    <Button color="secondary" onClick={() => handleDelete(client.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editData ? "Edit Client" : "Add Client"}</DialogTitle>
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
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={form.email}
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
            name="address"
            label="Address"
            type="text"
            fullWidth
            value={form.address}
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

export default AdminClients;