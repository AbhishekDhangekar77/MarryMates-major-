import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientProfile = () => {
  const ProfileData1 = JSON.parse(localStorage.getItem('user'));
  const [client, setClient] = useState({
    id: ProfileData1.id, 
    name: ProfileData1.name,
    email: ProfileData1.email,
    contactNumber: ProfileData1.contactNumber,
    address: ProfileData1.address,
    userName: ProfileData1.userName,
    password: ProfileData1.password,
    createdAt: ProfileData1.createdAt,
  });

  useEffect(() => {
    // Fetch client data from API
    axios.get(`http://localhost:8080/api/clients/${ProfileData1.id}`)
      .then(response => {
        setClient(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the client data!', error);
      });
  }, [ProfileData1.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update client data via API
    axios.put(`http://localhost:8080/api/clients/update/${ProfileData1.id}`, client) // Use the id from local storage
      .then(response => {
        alert('Client profile updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the client profile!', error);
      });
  };

  return (
    <div>
      <h2>Update Client Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={client.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={client.email} onChange={handleChange} />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={client.contactNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={client.address} onChange={handleChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="userName" value={client.userName} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={client.password} onChange={handleChange} />
        </div>
        <div>
          <label>Created At:</label>
          <input type="text" name="createdAt" value={client.createdAt} readOnly />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ClientProfile;