// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, FormControl, Card, CardContent, Typography } from '@mui/material';

// const AdminBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [clients, setClients] = useState([]);
//   const [vendors, setVendors] = useState([]);
//   const [form, setForm] = useState({
//     client: { id: '' },
//     vendor: { id: '' },
//     price: 0,
//     status: "PENDING",
//     bookingDate: "",
//     eventDate: "",
//     remarks: ""
//   });
//   const [editData, setEditData] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     fetchBookings();
//     fetchClients();
//     fetchVendors();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/bookings");
//       console.log("Fetched bookings:", response.data); // Log the response data
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings", error);
//     }
//   };

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/clients/getAll");
//       console.log("Fetched clients:", response.data); // Log the response data
//       if (Array.isArray(response.data)) {
//         const simplifiedClients = response.data.map(client => ({
//           id: client.id,
//           name: client.name,
//           contactNumber: client.contactNumber,
//           email: client.email,
//           address: client.address
//         }));
//         setClients(simplifiedClients);
//         console.log("Simplified clients:", simplifiedClients); // Log the simplified clients
//       } else {
//         console.error("Clients response is not an array:", response.data);
//         setClients([]);
//       }
//     } catch (error) {
//       console.error("Error fetching clients", error);
//     }
//   };

//   const fetchVendors = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/vendors/getAll");
//       console.log("Vendors response:", response.data); // Log the response
//       if (Array.isArray(response.data)) {
//         const simplifiedVendors = response.data.map(vendor => ({
//           id: vendor.id,
//           name: vendor.name,
//           contactNumber: vendor.contactNumber,
//           email: vendor.email,
//           address: vendor.address,
//           managerName: vendor.managerName,
//           managerContact: vendor.managerContact
//         }));
//         setVendors(simplifiedVendors);
//         console.log("Simplified vendors:", simplifiedVendors); // Log the simplified vendors
//       } else {
//         console.error("Vendors response is not an array:", response.data);
//         setVendors([]);
//       }
//     } catch (error) {
//       console.error("Error fetching vendors", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/bookings/${id}`);
//       fetchBookings();
//     } catch (error) {
//       console.error("Error deleting booking", error);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       if (!form.client.id || !form.vendor.id || !form.price || !form.status || !form.bookingDate || !form.eventDate) {
//         alert("Please fill in all required fields.");
//         return;
//       }

//       console.log("Form data:", JSON.stringify(form, null, 2));

//       if (editData) {
//         await axios.put(`http://localhost:8080/api/bookings/update/${editData.id}`, {
//           client: { id: form.client.id },
//           vendor: { id: form.vendor.id },
//           price: form.price,
//           status: form.status,
//           bookingDate: form.bookingDate,
//           eventDate: form.eventDate,
//           remarks: form.remarks
//         });
//       } else {
//         await axios.post("http://localhost:8080/api/bookings/create", {
//           client: { id: form.client.id },
//           vendor: { id: form.vendor.id },
//           price: form.price,
//           status: form.status,
//           bookingDate: form.bookingDate,
//           eventDate: form.eventDate,
//           remarks: form.remarks
//         });
//       }
//       fetchBookings();
//       handleClose();
//     } catch (error) {
//       console.error("Error saving booking", error);
//     }
//   };

//   const handleOpen = (booking = null) => {
//     setEditData(booking);
//     setForm(booking || {
//       client: { id: '' },
//       vendor: { id: '' },
//       price: 0,
//       status: "PENDING",
//       bookingDate: "",
//       eventDate: "",
//       remarks: ""
//     });
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditData(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const handleSelectChange = (e) => {
//     const { name, value } = e.target;
//     const [parent, child] = name.split('.');
//     setForm((prevForm) => ({
//       ...prevForm,
//       [parent]: {
//         ...prevForm[parent],
//         [child]: value,
//       },
//     }));
//   };
  

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`http://localhost:8080/api/bookings/${id}/approve`, { status: 'APPROVED' });
//       fetchBookings();
//     } catch (error) {
//       console.error("Error approving booking", error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.put(`http://localhost:8080/api/bookings/cancel/${id}`, { status: 'REJECTED' });
//       fetchBookings();
//     } catch (error) {
//       console.error("Error rejecting booking", error);
//     }
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={() => handleOpen()}>
//         Add Booking
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{editData ? "Edit Booking" : "Add Booking"}</DialogTitle>
//         <DialogContent>
//           <FormControl fullWidth margin="dense">
//             <InputLabel id="client-label">Client</InputLabel>
//             <Select
//               labelId="client-label"
//               name="client.id"
//               value={form.client.id}
//               onChange={handleSelectChange}
//             >
//               <MenuItem value=""><em>None</em></MenuItem>
//               {clients.map((client) => (
//                 <MenuItem key={client.id} value={client.id}>
//                   {client.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <FormControl fullWidth margin="dense">
//             <InputLabel id="vendor-label">Vendor</InputLabel>
//             <Select
//               labelId="vendor-label"
//               name="vendor.id"
//               value={form.vendor.id}
//               onChange={handleSelectChange}
//             >
//               <MenuItem value=""><em>None</em></MenuItem>
//               {vendors.map((vendor) => (
//                 <MenuItem key={vendor.id} value={vendor.id}>
//                   {vendor.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <TextField
//             margin="dense"
//             name="price"
//             label="Price"
//             type="number"
//             fullWidth
//             value={form.price}
//             onChange={handleChange}
//           />
//           <FormControl fullWidth margin="dense">
//             <InputLabel id="status-label">Status</InputLabel>
//             <Select
//               labelId="status-label"
//               name="status"
//               value={form.status}
//               onChange={handleChange}
//             >
//               <MenuItem value="PENDING">PENDING</MenuItem>
//               <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>
//               <MenuItem value="CANCELLED">CANCELLED</MenuItem>
//               <MenuItem value="COMPLETED">COMPLETED</MenuItem>
//               <MenuItem value="ACCEPTED">ACCEPTED</MenuItem>
//               <MenuItem value="DECLINED">DECLINED</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             margin="dense"
//             name="bookingDate"
//             label="Booking Date"
//             type="datetime-local"
//             fullWidth
//             value={form.bookingDate}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="eventDate"
//             label="Event Date"
//             type="datetime-local"
//             fullWidth
//             value={form.eventDate}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="dense"
//             name="remarks"
//             label="Remarks"
//             type="text"
//             fullWidth
//             value={form.remarks}
//             onChange={handleChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <div>
//         <h2>Bookings</h2>
//         {bookings.length > 0 ? (
//           <div style={styles.bookingsContainer}>
//             {bookings.map((booking) => (
//               <Card key={booking.id} style={styles.bookingCard}>
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     Client: {booking.clientName || 'N/A'}
//                   </Typography>
//                   <Typography variant="h6" component="div">
//                     Vendor: {booking.vendorName || 'N/A'}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Price: {booking.price}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Status: {booking.status}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Booking Date: {booking.bookingDate}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Event Date: {booking.eventDate}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Remarks: {booking.remarks}
//                   </Typography>
//                   <Button variant="contained" color="primary" onClick={() => handleOpen(booking)} style={styles.editButton}>
//                     Edit
//                   </Button>
//                   <Button variant="contained" color="secondary" onClick={() => handleDelete(booking.id)} style={styles.deleteButton}>
//                     Delete
//                   </Button>
//                   <Button variant="contained" color="success" onClick={() => handleApprove(booking.id)} style={styles.approveButton}>
//                     Approve
//                   </Button>
//                   <Button variant="contained" color="error" onClick={() => handleReject(booking.id)} style={styles.rejectButton}>
//                     Reject
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           <p>No bookings found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // Inline CSS Styles
// const styles = {
//   bookingsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
//   bookingCard: {
//     width: '300px',
//     margin: '10px',
//     padding: '10px',
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   editButton: {
//     marginTop: '10px',
//     marginRight: '10px',
//   },
//   deleteButton: {
//     marginTop: '10px',
//     marginRight: '10px',
//   },
//   approveButton: {
//     marginTop: '10px',
//     marginRight: '10px',
//     backgroundColor: '#4caf50',
//     color: 'white',
//   },
//   rejectButton: {
//     marginTop: '10px',
//     backgroundColor: '#f44336',
//     color: 'white',
//   },
// };

// export default AdminBookings;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, FormControl, Card, CardContent, Typography } from '@mui/material';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [clients, setClients] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [form, setForm] = useState({
    client: { id: '' },
    vendor: { id: '' },
    price: 0,
    status: "PENDING",
    bookingDate: "",
    eventDate: "",
    remarks: ""
  });
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchBookings();
    fetchClients();
    fetchVendors();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/bookings");
      console.log("Fetched bookings:", response.data); // Log the response data
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/clients/getAll");
      console.log("Fetched clients:", response.data); // Log the response data
      if (Array.isArray(response.data)) {
        const simplifiedClients = response.data.map(client => ({
          id: client.id,
          name: client.name,
          contactNumber: client.contactNumber,
          email: client.email,
          address: client.address
        }));
        setClients(simplifiedClients);
        console.log("Simplified clients:", simplifiedClients); // Log the simplified clients
      } else {
        console.error("Clients response is not an array:", response.data);
        setClients([]);
      }
    } catch (error) {
      console.error("Error fetching clients", error);
    }
  };

  const fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/vendors/getAll");
      console.log("Vendors response:", response.data); // Log the response
      if (Array.isArray(response.data)) {
        const simplifiedVendors = response.data.map(vendor => ({
          id: vendor.id,
          name: vendor.name,
          contactNumber: vendor.contactNumber,
          email: vendor.email,
          address: vendor.address,
          managerName: vendor.managerName,
          managerContact: vendor.managerContact
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
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/bookings/${id}`);
      fetchBookings();
    } catch (error) {
      console.error("Error deleting booking", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!form.client.id || !form.vendor.id || !form.price || !form.status || !form.bookingDate || !form.eventDate) {
        alert("Please fill in all required fields.");
        return;
      }

      console.log("Form data:", JSON.stringify(form, null, 2));

      if (editData) {
        await axios.put(`http://localhost:8080/api/bookings/update/${editData.id}`, {
          client: { id: form.client.id },
          vendor: { id: form.vendor.id },
          price: form.price,
          status: form.status,
          bookingDate: form.bookingDate,
          eventDate: form.eventDate,
          remarks: form.remarks
        });
      } else {
        await axios.post("http://localhost:8080/api/bookings/create", {
          client: { id: form.client.id },
          vendor: { id: form.vendor.id },
          price: form.price,
          status: form.status,
          bookingDate: form.bookingDate,
          eventDate: form.eventDate,
          remarks: form.remarks
        });
      }
      fetchBookings();
      handleClose();
    } catch (error) {
      console.error("Error saving booking", error);
    }
  };

  const handleOpen = (booking = null) => {
    if (booking) {
      setEditData(booking);
      setForm({
        client: { id: booking.client.id },
        vendor: { id: booking.vendor.id },
        price: booking.price,
        status: booking.status,
        bookingDate: booking.bookingDate,
        eventDate: booking.eventDate,
        remarks: booking.remarks
      });
    } else {
      setEditData(null);
      setForm({
        client: { id: '' },
        vendor: { id: '' },
        price: 0,
        status: "PENDING",
        bookingDate: "",
        eventDate: "",
        remarks: ""
      });
    }
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

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.');
    setForm((prevForm) => ({
      ...prevForm,
      [parent]: {
        ...prevForm[parent],
        [child]: value,
      },
    }));
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/bookings/${id}/approve`, { status: 'APPROVED' });
      fetchBookings();
    } catch (error) {
      console.error("Error approving booking", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/bookings/cancel/${id}`, { status: 'REJECTED' });
      fetchBookings();
    } catch (error) {
      console.error("Error rejecting booking", error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Booking
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editData ? "Edit Booking" : "Add Booking"}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel id="client-label">Client</InputLabel>
            <Select
              labelId="client-label"
              name="client.id"
              value={form.client.id}
              onChange={handleSelectChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {clients.map((client) => (
                <MenuItem key={client.id} value={client.id}>
                  {client.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel id="vendor-label">Vendor</InputLabel>
            <Select
              labelId="vendor-label"
              name="vendor.id"
              value={form.vendor.id}
              onChange={handleSelectChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {vendors.map((vendor) => (
                <MenuItem key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={form.price}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <MenuItem value="PENDING">PENDING</MenuItem>
              <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>
              <MenuItem value="CANCELLED">CANCELLED</MenuItem>
              <MenuItem value="COMPLETED">COMPLETED</MenuItem>
              <MenuItem value="ACCEPTED">ACCEPTED</MenuItem>
              <MenuItem value="DECLINED">DECLINED</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            name="bookingDate"
            label="Booking Date"
            type="datetime-local"
            fullWidth
            value={form.bookingDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="eventDate"
            label="Event Date"
            type="datetime-local"
            fullWidth
            value={form.eventDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="remarks"
            label="Remarks"
            type="text"
            fullWidth
            value={form.remarks}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        <h2>Bookings</h2>
        {bookings.length > 0 ? (
          <div style={styles.bookingsContainer}>
            {bookings.map((booking) => (
              <Card key={booking.id} style={styles.bookingCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Client: {booking.clientName || 'N/A'}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Vendor: {booking.vendorName || 'N/A'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: {booking.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Status: {booking.status}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Booking Date: {booking.bookingDate}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Event Date: {booking.eventDate}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Remarks: {booking.remarks}
                  </Typography>
                  <Button variant="contained" color="primary" onClick={() => handleOpen(booking)} style={styles.editButton}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(booking.id)} style={styles.deleteButton}>
                    Delete
                  </Button>
                  <Button variant="contained" color="success" onClick={() => handleApprove(booking.id)} style={styles.approveButton}>
                    Approve
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleReject(booking.id)} style={styles.rejectButton}>
                    Reject
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
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
  editButton: {
    marginTop: '10px',
    marginRight: '10px',
  },
  deleteButton: {
    marginTop: '10px',
    marginRight: '10px',
  },
  approveButton: {
    marginTop: '10px',
    marginRight: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
  },
  rejectButton: {
    marginTop: '10px',
    backgroundColor: '#f44336',
    color: 'white',
  },
};

export default AdminBookings;