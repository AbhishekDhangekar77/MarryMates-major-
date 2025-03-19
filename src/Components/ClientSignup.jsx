import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../form.css';

const ClientSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    address: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/clients/add', formData);
      toast.success('Client added successfully!');
      console.log('Client added successfully:', response.data);
      alert('Client added successfully!');
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      toast.error('Client not added. Please try again.');
      console.error('There was an error adding the client:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        setError(`Error: ${error.response.data.message || 'An error occurred while adding the client.'}`);
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
    <div className="signup-form">
      <h2>Client Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="userName"
          placeholder="Enter your username"
          value={formData.userName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <label>Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          placeholder="Enter your contact number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default ClientSignup;