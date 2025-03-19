import React, { useEffect, useState } from "react";

const ClientManageBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch bills from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/bills")
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching bills. Please try again.");
        setLoading(false);
        console.error("Error fetching bills:", error);
      });
  }, []);

  // Function to update bill status
  const updateStatus = async (id, newStatus) => {
    if (!window.confirm(`Are you sure you want to mark this bill as ${newStatus}?`)) return;

    try {
      const response = await fetch(`http://localhost:5000/api/bills/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update bill");

      setBills((prevBills) =>
        prevBills.map((bill) => (bill.id === id ? { ...bill, status: newStatus } : bill))
      );
    } catch (error) {
      alert("Error updating bill status. Please try again.");
      console.error("Error updating bill status:", error);
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.box}>
        <h2 style={styles.title}>Manage Bills</h2>

        {error && <p style={styles.error}>{error}</p>}
        {loading ? (
          <p style={styles.loader}>Loading bills...</p>
        ) : bills.length === 0 ? (
          <p style={styles.emptyMessage}>No bills found.</p>
        ) : (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill.id}>
                    <td>{bill.service}</td>
                    <td>₹{bill.amount.toLocaleString()}</td>
                    <td>
                      <span
                        style={{
                          ...styles.status,
                          backgroundColor: bill.status === "Paid" ? "#28a745" : "#dc3545",
                        }}
                      >
                        {bill.status}
                      </span>
                    </td>
                    <td>
                      {bill.status === "Pending" && (
                        <button
                          style={styles.button}
                          onClick={() => updateStatus(bill.id, "Paid")}
                        >
                          Mark as Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  outerContainer: { display: "flex", justifyContent: "center", padding: "20px" },
  box: { 
    backgroundColor: "#fff", 
    padding: "20px", 
    borderRadius: "10px", 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
    width: "700px",
    textAlign: "center"
  },
  title: { color: "#333", fontSize: "22px", marginBottom: "10px" },
  error: { color: "red", fontSize: "16px" },
  tableContainer: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
  status: { padding: "5px 10px", borderRadius: "5px", color: "white" },
  button: { 
    padding: "5px 10px", 
    fontSize: "14px", 
    backgroundColor: "#007bff", 
    color: "white", 
    border: "none", 
    cursor: "pointer",
    transition: "0.3s ease"
  },
  loader: { fontSize: "18px", color: "#555" },
  emptyMessage: { fontSize: "16px", color: "#999" },
};

export default ClientManageBills;