import React from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminNavbar = () => {

   const navigate = useNavigate();
  
    const handleLogout = () => {
      // Add your logout logic here (e.g., clearing tokens, making API calls)
      console.log("Admin logged out");
      navigate("/login"); // Redirect to login page after logout
    };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark admin-navbar shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand admin-navbar-brand" to="/admin">
          MarryMates Admin
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbarContent"
          aria-controls="adminNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 admin-navbar-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/clients">
                Manage Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/vendors">
                Manage Vendors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/venues">
                Manage Venues
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/bookings">
                Manage Bookings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/reports">
                Reports
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

export default AdminNavbar;
