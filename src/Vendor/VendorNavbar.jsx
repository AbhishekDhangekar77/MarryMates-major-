import React from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const VendorNavbar = () => {
   const navigate = useNavigate();
    
      const handleLogout = () => {
        // Add your logout logic here (e.g., clearing tokens, making API calls)
        console.log("Vendor logged out");
        navigate("/login"); // Redirect to login page after logout
      };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark admin-navbar shadow-lg">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand admin-navbar-brand" to="/Vendor">
          MarryMates Vendor
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#VendorNavbarContent"
          aria-controls="VendorNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="VendorNavbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 admin-navbar-links">
            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                className="nav-link Vendor-dashboard-link"
                activeClassName="active"
                to="/Vendor"
              >
                Dashboard
              </NavLink>
            </li>

            {/* Manage Users */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-users-link"
                activeClassName="active"
                to="/Vendor/VendorUsers"
              >
                Manage Client
              </NavLink>
            </li>

            {/* Manage Services */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-vendors-link"
                activeClassName="active"
                to="/Vendor/VendorServices"
              >
                Manage Services
              </NavLink>
            </li>
            {/* Manage Bookings */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-vendors-link"
                activeClassName="active"
                to="/Vendor/VendorBookings"
              >
                Manage Bookings
              </NavLink>
            </li>


            {/* Manage Venues */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-venues-link"
                activeClassName="active"
                to="/Vendor/VendorVenues"
              >
                Manage Venues
              </NavLink>
            </li>

            {/* client Bills */}
            <li className="nav-item">
              <NavLink
                className="nav-link admin-reports-link"
                activeClassName="active"
                to="/Vendor/VendorBills"
              >
                Manage Bills
              </NavLink>
            </li>
          </ul>

           {/* Logout Button */}
           <form className="d-flex">
            <button
              type="button"
              className="btn btn-outline-danger client-logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default VendorNavbar;
