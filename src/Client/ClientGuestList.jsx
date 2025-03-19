import React, { useState, useEffect } from "react";

const ClientGuestList = () => {
  const [guestCount, setGuestCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchGuestCount();
  }, []);

  const fetchGuestCount = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/guest-count");
      const data = await response.json();
      setGuestCount(data.count);
      setError("");
    } catch (err) {
      setError("Failed to load guest count.");
    }
    setLoading(false);
  };

  const updateGuestCount = async () => {
    if (guestCount < 1) {
      setError("Guest count must be at least 1.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/guest-count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: guestCount }),
      });

      if (response.ok) {
        setSuccessMessage("Guest count updated!");
        setTimeout(() => setSuccessMessage(""), 2000);
      } else {
        setError("Failed to update guest count.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Total Guests</h2>
      {error && <p style={styles.error}>{error}</p>}
      {successMessage && <p style={styles.success}>{successMessage}</p>}

      <div style={styles.inputGroup}>
        <input
          type="number"
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          placeholder="Enter total guests"
          style={styles.input}
        />
        <button onClick={updateGuestCount} style={styles.button} disabled={loading}>
          {loading ? "Saving..." : "Save Count"}
        </button>
      </div>

      <h3 style={styles.guestCount}>Guest Count: {guestCount}</h3>
    </div>
  );
};

// Inline CSS
const styles = {
  container: { maxWidth: "400px", margin: "auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  heading: { color: "#333" },
  guestCount: { fontSize: "20px", fontWeight: "bold", color: "#007bff", marginTop: "15px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "15px" },
  input: { padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "100%" },
  button: { padding: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
  error: { color: "red" },
  success: { color: "green" },
};

export default ClientGuestList;
