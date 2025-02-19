import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      {user ? <p>Welcome, {user.name} ({user.email})</p> : <p>Loading...</p>}
      <a href="/login">Logout</a>
    </div>
  );
};

export default UserDashboard;
