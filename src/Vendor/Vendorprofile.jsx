import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VendorProfile = () => {
  const ProfileData1 = JSON.parse(localStorage.getItem('user'));
  const [profile, setProfile] = useState({
    id: ProfileData1.id,
    name: ProfileData1.name,
    userName: ProfileData1.userName,
    contactNumber: ProfileData1.contactNumber,
    email: ProfileData1.email,
    address: ProfileData1.address,
    managerName: ProfileData1.managerName,
    managerContact: ProfileData1.managerContact,
    password: ProfileData1.password,
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const vendorId = ProfileData1.id; // Fetch vendor ID from local storage

  useEffect(() => {
    axios.get(`http://localhost:8080/api/vendors/${vendorId}`)
      .then(response => {
        setProfile(response.data);
        console.log('Profile fetched successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, [vendorId]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/vendors/profile/${vendorId}`, profile)
      .then(response => {
        setMessage('Profile updated successfully!');
        setSeverity('success');
        setOpen(true);
      })
      .catch(error => {
        setMessage('There was an error updating the profile!');
        setSeverity('error');
        setOpen(true);
        console.error('There was an error updating the profile!', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/vendors/delete/${vendorId}`)
      .then(response => {
        setMessage('Profile deleted successfully!');
        setSeverity('success');
        setOpen(true);
      })
      .catch(error => {
        setMessage('There was an error deleting the profile!');
        setSeverity('error');
        setOpen(true);
        console.error('There was an error deleting the profile!', error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h4>Vendor Profile</h4>
      <h6 style={{ textAlign: 'left', marginBottom: '20px' }}>{profile.name}</h6>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '600px', padding: '20px', textAlign: 'center', boxShadow: '0 3px 5px 2px rgba(105, 135, 255, .3)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={profile.name || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={profile.userName || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={profile.contactNumber || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={profile.address || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="text"
              name="managerName"
              placeholder="Manager Name"
              value={profile.managerName || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="text"
              name="managerContact"
              placeholder="Manager Contact"
              value={profile.managerContact || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={profile.password || ''}
              onChange={handleChange}
              style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
            />
            <button type="submit" style={{ marginTop: '10px', width: '100%', padding: '10px', backgroundColor: '#3f51b5', color: 'white', border: 'none', cursor: 'pointer' }}>
              Update Profile
            </button>
            <button type="button" onClick={handleDelete} style={{ marginTop: '10px', width: '100%', padding: '10px', backgroundColor: '#f50057', color: 'white', border: 'none', cursor: 'pointer' }}>
              Delete Profile
            </button>
          </form>
        </div>
      </div>
      {open && (
        <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: severity === 'success' ? 'green' : 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
          {message}
          <button onClick={handleClose} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>X</button>
        </div>
      )}
    </div>
  );
};

export default VendorProfile;