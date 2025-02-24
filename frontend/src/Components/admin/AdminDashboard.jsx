import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../css/AdminDashboard.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Mark Johnson', email: 'mark@example.com', role: 'User', status: 'Inactive' },
  ]);

  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState(""); // Define the message state
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' }); // State for sorting

  // Demo report data
  const [reports, setReports] = useState([
    { id: 1, userName: 'Jane Smith', time: '2023-09-15 10:00:00', status: 'Pending', link: '/scan-report/1' },
    { id: 2, userName: 'Mark Johnson', time: '2023-09-16 14:20:00', status: 'Processing', link: '/scan-report/2' },
    { id: 3, userName: 'John Doe', time: '2023-09-17 09:30:00', status: 'Completed', link: '/scan-report/3' },
  ]);

  const handleActivate = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: 'Active' } : user
    ));
    setPopupMessage("User has been activated");
    setPopupVisible(true);
  };

  const handleDeactivate = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: 'Inactive' } : user
    ));
    setPopupMessage("User has been deactivated");
    setPopupVisible(true);
  };

  const handleChangeReportStatus = (id, newStatus) => {
    setReports(reports.map(report =>
      report.id === id ? { ...report, status: newStatus } : report
    ));
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const sendMessage = () => {
    alert('Message sent: ' + message);
    setMessage(''); // Clear the message after sending
  };

  // Search Filter for users
  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting Functionality for users
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Toggle sort direction for users
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="admin-dashboard">
      {/* User Management Section */}
      <div className="admin-grid">
        <div className="user-management">
          <h2>User Management</h2>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
            className="search-bar"
          />
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('email')}>Email</th>
                <th onClick={() => handleSort('role')}>Role</th>
                <th onClick={() => handleSort('status')}>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    {user.status === 'Inactive' ? (
                      <button onClick={() => handleActivate(user.id)}>Activate</button>
                    ) : (
                      <button onClick={() => handleDeactivate(user.id)}>Deactivate</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Alert */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <h3>{popupMessage}</h3>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Waste Charts Section */}
      <div className="admin-grid">
        <div className="waste-charts">
          <h2>Waste Data</h2>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Hazardous Waste',
                  data: [100, 120, 150, 130, 160, 140],
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.4)',
                  tension: 0.4,
                  borderWidth: 2,
                },
                {
                  label: 'Non-Hazardous Waste',
                  data: [200, 180, 220, 210, 250, 230],
                  borderColor: 'rgba(53, 162, 235, 1)',
                  backgroundColor: 'rgba(53, 162, 235, 0.4)',
                  tension: 0.4,
                  borderWidth: 2,
                },
                {
                  label: 'Organic Waste',
                  data: [300, 320, 350, 310, 280, 270],
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.4)',
                  tension: 0.4,
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Waste Data by Month',
                  font: { size: 20 },
                  padding: 10,
                },
                tooltip: {
                  backgroundColor: '#000',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  footerColor: '#fff',
                },
              },
              elements: {
                line: {
                  borderWidth: 3,
                  borderCapStyle: 'round',
                  borderJoinStyle: 'round',
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                  },
                  ticks: {
                    beginAtZero: true,
                    stepSize: 50,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Report Management Section */}
      <div className="admin-grid">
        <div className="report-management">
          <h2>Report Management</h2>
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Time and Date</th>
                <th>Report</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.userName}</td>
                  <td>{report.time}</td>
                  <td>
                    <Link to={report.link}>View Report</Link> {/* Link to ScanReport.jsx */}
                  </td>
                  <td>{report.status}</td>
                  <td>
                    <button onClick={() => handleChangeReportStatus(report.id, 'Pending')}>Pending</button>
                    <button onClick={() => handleChangeReportStatus(report.id, 'Processing')}>Processing</button>
                    <button onClick={() => handleChangeReportStatus(report.id, 'Completed')}>Completed</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;