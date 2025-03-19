import React from "react";
import { Link } from "react-router-dom";
import ClientNavbar from "./ClientNavbar";

const ClientDashboard = () => {
  const clientId = ""; // Replace with the actual client ID from your authentication logic

  return (
    <>
      <ClientNavbar />
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          border: "2px solid #e91e63",
          borderRadius: "10px",
          background: "#fff5f8",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#e91e63", marginBottom: "15px" }}>💒 Client Dashboard</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link
            to="/Client/ClientEventDetails"
            style={{
              padding: "10px",
              background: "#e91e63",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#d81b60")}
            onMouseOut={(e) => (e.target.style.background = "#e91e63")}
          >
            ➕ Add Event Details
          </Link>

          <Link
            to="/Client/ClientGuestList"
            style={{
              padding: "10px",
              background: "#ff4081",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#f50057")}
            onMouseOut={(e) => (e.target.style.background = "#ff4081")}
          >
            👨‍👩‍👧 Manage Guest List
          </Link>

          <Link
            to="/Client/ClientManageBills"
            style={{
              padding: "10px",
              background: "#ff4081",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#f50057")}
            onMouseOut={(e) => (e.target.style.background = "#ff4081")}
          >
            📝 Manage Bills
          </Link>

          <Link
            to="/Client/ClientProfile"
            style={{
              padding: "10px",
              background: "#4caf50",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#388e3c")}
            onMouseOut={(e) => (e.target.style.background = "#4caf50")}
          >
            🛠️ Update Profile
          </Link>

          <Link
            to={{
              pathname: "/Client/BookingSummary",
              state: { clientId: clientId }
            }}
            style={{
              padding: "10px",
              background: "#2196f3",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1976d2")}
            onMouseOut={(e) => (e.target.style.background = "#2196f3")}
          >
            📄 Booking Summary
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;