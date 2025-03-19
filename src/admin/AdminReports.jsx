import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering the required components for chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminReports = () => {
  // Sample data for reports
  const [reportData, setReportData] = useState({
    bookingsData: [50, 70, 80, 90, 100, 120],
    venuesData: [5, 8, 10, 12, 15, 18],
    usersData: [150, 180, 200, 220, 240, 260],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  });

  const bookingsChartData = {
    labels: reportData.months,
    datasets: [
      {
        label: "Bookings",
        data: reportData.bookingsData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const venuesChartData = {
    labels: reportData.months,
    datasets: [
      {
        label: "Venues Booked",
        data: reportData.venuesData,
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  };

  const usersChartData = {
    labels: reportData.months,
    datasets: [
      {
        label: "New Users",
        data: reportData.usersData,
        fill: false,
        borderColor: "rgb(255, 159, 64)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mt-5 admin-reports-page">
      <h2 className="text-center mb-4">Admin Reports</h2>

      {/* Booking Report */}
      <div className="card shadow-lg admin-booking-report-card mb-4">
        <div className="card-body">
          <h4 className="card-title">Bookings Report (Monthly)</h4>
          <Line data={bookingsChartData} />
        </div>
      </div>

      {/* Venues Report */}
      <div className="card shadow-lg admin-venues-report-card mb-4">
        <div className="card-body">
          <h4 className="card-title">Venues Booked Report (Monthly)</h4>
          <Line data={venuesChartData} />
        </div>
      </div>

      {/* Users Report */}
      <div className="card shadow-lg admin-users-report-card mb-4">
        <div className="card-body">
          <h4 className="card-title">New Users Report (Monthly)</h4>
          <Line data={usersChartData} />
        </div>
      </div>

      {/* Detailed Tables */}
      <div className="card shadow-lg admin-reports-table-card">
        <div className="card-body">
          <h4 className="card-title">Detailed Reports</h4>

          {/* Bookings Table */}
          <h5 className="mt-4">Bookings Details</h5>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Booking ID</th>
                <th>User</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#B001</td>
                <td>John Doe</td>
                <td>Venue 1</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>#B002</td>
                <td>Jane Smith</td>
                <td>Venue 2</td>
                <td>Pending</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>

          {/* Venues Table */}
          <h5 className="mt-4">Venues Details</h5>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Venue ID</th>
                <th>Venue Name</th>
                <th>Location</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#V001</td>
                <td>Venue 1</td>
                <td>Location A</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>2</td>
                <td>#V002</td>
                <td>Venue 2</td>
                <td>Location B</td>
                <td>Booked</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>

          {/* Users Table */}
          <h5 className="mt-4">Users Details</h5>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#U001</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>#U002</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>Inactive</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
