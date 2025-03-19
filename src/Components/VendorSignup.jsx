import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../form.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const VendorSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userName: '',
    contactNumber: '',
    address: '',
    managerName: '',
    managerContact: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission
    try {
      console.log("Form data in vendor reg", formData);
      const response = await axios.post('http://localhost:8080/api/vendors/add', formData);
      toast.success('Vendor added successfully!');
      alert('Vendor added successfully!');
      console.log('Vendor added successfully:', response.data);
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      toast.error('Vendor not added. Please try again.');
      console.error('There was an error adding the vendor:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        setError(`Error: ${error.response.data.message || 'An error occurred while adding the vendor.'}`);
      } else if (error.request) {
        console.error('Request data:', error.request);
        setError('Error: No response received from the server.');
      } else {
        console.error('Error message:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Vendor Name</label>
        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Vendor Name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" required />
      </div>
      <div className="form-group">
        <label>Contact Number</label>
        <input type="text" className="form-control" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      </div>
      <div className="form-group">
        <label>Manager Name</label>
        <input type="text" className="form-control" name="managerName" value={formData.managerName} onChange={handleChange} placeholder="Manager Name" required />
      </div>
      <div className="form-group">
        <label>Manager Contact Number</label>
        <input type="text" className="form-control" name="managerContact" value={formData.managerContact} onChange={handleChange} placeholder="Manager Contact Number" required />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
      {error && <p className="text-danger mt-3">{error}</p>}
    </form>
  );
};

export default VendorSignup;
