import React, { useState } from "react";
import "../../Components/css/Maps.css";

const Maps = () => {
  // Sample data for MRFs (Replace with actual API data later)
  const facilities = [
    { id: 1, name: "Taguig MRF 1", address: "123 Market St, Taguig", distance: 1.2, category: "Plastic" },
    { id: 2, name: "Eco Green MRF", address: "456 Green Ave, Taguig", distance: 2.5, category: "Metal" },
    { id: 3, name: "Recycle Hub", address: "789 Clean St, Taguig", distance: 3.8, category: "Paper" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortByDistance, setSortByDistance] = useState(false);

  // Filter & Sort Logic
  const filteredFacilities = facilities
    .filter((facility) => selectedCategory === "All" || facility.category === selectedCategory)
    .sort((a, b) => (sortByDistance ? a.distance - b.distance : 0));

  return (
    <div className="maps-container">
      <main className="maps-main">
        <h1 className="maps-title">Find a Materials Recovery Facility Near You</h1>

        {/* Filters */}
        <div className="maps-filters">
          <select className="filter-select" onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Plastic">Plastic</option>
            <option value="Metal">Metal</option>
            <option value="Paper">Paper</option>
          </select>
          <label className="checkbox-label">
            <input type="checkbox" onChange={() => setSortByDistance(!sortByDistance)} />
            Sort by Distance
          </label>
        </div>

        {/* Facility List */}
        <ul className="maps-list">
          {filteredFacilities.map((facility) => (
            <li key={facility.id} className="mrf-card">
              <h2 className="mrf-name">{facility.name}</h2>
              <p className="mrf-address">{facility.address}</p>
              <p className="mrf-distance"><strong>Distance:</strong> {facility.distance} km</p>
              <p><strong>Category:</strong> {facility.category}</p>
            </li>
          ))}
        </ul>

        {/* Google Maps Embed */}
<div className="maps-frame-container">
  <iframe
    className="maps-frame"
    title="Google Maps"
    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123593.63161689012!2d120.9165749433594!3d14.524768300000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8b73d788357%3A0x568fac3216b49312!2sMaterial%20Recovery%20Facility!5e0!3m2!1sen!2sph!4v1740095763604!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
    width="100%"
    height="400"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
      </main>
    </div>
  );
};

export default Maps;