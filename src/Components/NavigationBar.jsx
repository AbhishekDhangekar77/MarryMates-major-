import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MarryMates</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Venues">Venues</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Vendors">Vendors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ClientsFeedback">Clients FeedbacK</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
           
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
