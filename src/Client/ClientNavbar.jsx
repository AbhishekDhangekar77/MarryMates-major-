import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, making API calls)
    console.log("User logged out");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark client-navbar shadow-lg">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand client-navbar-brand" to="/client">
          MarryMates Client
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#clientNavbarContent"
          aria-controls="clientNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="clientNavbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 client-navbar-links">
            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                className="nav-link client-dashboard-link"
                activeClassName="active"
                to="/client/ClientDashboard"
              >
                Dashboard
              </NavLink>
            </li>

            {/* Event Details */}
            <li className="nav-item">
              <NavLink
                className="nav-link client-event-link"
                activeClassName="active"
                to="/Client/ClientEventDetails"
              >
                Event Details
              </NavLink>
            </li>

            {/* Guest List */}
            <li className="nav-item">
              <NavLink
                className="nav-link client-guests-link"
                activeClassName="active"
                to="/Client/ClientGuestList"
              >
                Guest List
              </NavLink>
            </li>

           

           

            {/* Manage Bills */}
            <li className="nav-item">
              <NavLink
                className="nav-link client-bills-link"
                activeClassName="active"
                to="/Client/ClientManageBills"
              >
                Manage Bills
              </NavLink>
            </li>
            {/* Feedback */}
            <li className="nav-item">
              <NavLink
                className="nav-link client-feedback-link"
                activeClassName="active"
                to="/Client/ClientFeedback"
              >
                Feedback
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

export default ClientNavbar;



