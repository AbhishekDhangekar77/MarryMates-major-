import React from "react";
import { Link } from "react-router-dom";
import ClientNavbar from "./ClientNavbar";

const Client = () => {
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
        <h1 style={{ color: "#e91e63", marginBottom: "15px" }}>💒 Client</h1>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <Link
            to="/Client/ClientDashboard"
            style={{
              padding: "20px",
              background: "#e91e63",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              transition: "0.3s",
              display: "inline-block",
              width: "200px",
              height: "200px",
              lineHeight: "160px",
              textAlign: "center",
            }}
            onMouseOver={(e) => (e.target.style.background = "#d81b60")}
            onMouseOut={(e) => (e.target.style.background = "#e91e63")}
          >
            🏠 Client Dashboard
          </Link>

          <Link
            to="/Client/ClientEventDetails"
            style={{
              padding: "20px",
              background: "#e91e63",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              transition: "0.3s",
              display: "inline-block",
              width: "200px",
              height: "200px",
              lineHeight: "160px",
              textAlign: "center",
            }}
            onMouseOver={(e) => (e.target.style.background = "#d81b60")}
            onMouseOut={(e) => (e.target.style.background = "#e91e63")}
          >
            ➕ Add Event Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Client;
