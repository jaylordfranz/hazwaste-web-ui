import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { MapPin } from "lucide-react"; // Icon for location pin
import "../css/UserDashboard.css";

const materialData = [
  { name: "Melt-blown PP", value: 12 },
  { name: "Non-woven Fabric", value: 15 },
  { name: "Melt-blown PP", value: 20 },
];

const score = 70;
const data = [
  { value: score },
  { value: 100 - score },
];

const COLORS = ["#FF914D", "#F5F5F5"]; // Orange for filled, light gray for empty

const initialWidgets = [
  { id: "waste-info", content: "Waste Information" },
  { id: "detected-materials", content: "Detected Materials" },
  { id: "recyclability-score", content: "Recyclability Score" },
  { id: "facilities", content: "Facility Finder" },
  { id: "chat-section", content: "Chat with Hazel" },
];

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [widgets, setWidgets] = useState(initialWidgets);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newWidgets = Array.from(widgets);
    const [movedItem] = newWidgets.splice(result.source.index, 1);
    newWidgets.splice(result.destination.index, 0, movedItem);

    setWidgets(newWidgets);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
  <h2 className="brand">HazWaste</h2>
  <div className="profile-section">
    <div className="profile-icon">👤</div>
    <button className="edit-button" onClick={() => window.location.href='/EditProfile'}>Edit</button>
  </div>
  <nav className="nav-buttons">
    <a href="/dashboard" className={`nav-btn ${activeTab === "Dashboard" ? "active" : ""}`} onClick={() => setActiveTab("Dashboard")}>Dashboard</a>
    <a href="/history" className={`nav-btn ${activeTab === "History" ? "active" : ""}`} onClick={() => setActiveTab("History")}>History</a>
    <a href="/maps" className={`nav-btn ${activeTab === "Maps" ? "active" : ""}`} onClick={() => setActiveTab("Maps")}>Maps</a>
    <a href="/Awareness" className={`nav-btn ${activeTab === "Awareness" ? "active" : ""}`} onClick={() => setActiveTab("Awareness")}>Awareness</a>
  </nav>
</aside>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === "Dashboard" && (
          <div className="dashboard-ui">
            <h1 className="waste-title">
              Waste: Face Mask <span className="hazard-tag">🔴 Hazardous</span>
            </h1>

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="dashboard-content">
                {(provided) => (
                  <div
                    className="dashboard-content"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {widgets.map((widget, index) => (
                      <Draggable key={widget.id} draggableId={widget.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`dashboard-widget ${snapshot.isDragging ? "dragging" : ""}`}
                          >
                            {widget.id === "waste-info" && (
                              <div className="waste-info">
                                <img src="/assets/face-mask.jpg" alt="Placeholder" className="waste-image" />
                                <p className="category"><strong>Category:</strong> Medical Waste</p>
                                <p className="disposal"><strong>Disposal Instructions:</strong> Dispose at designated hazardous waste facility. Do not mix with regular trash.</p>
                              </div>
                            )}

                            {widget.id === "detected-materials" && (
                              <div className="detected-materials">
                                <div className="detected-header">
                                  <h3>Detected Materials</h3>
                                  <span className="see-all">See all</span>
                                </div>
                                <ResponsiveContainer width="100%" height={180}>
                                  <BarChart data={materialData} layout="vertical" margin={{ left: 30, right: 30 }}>
                                    <XAxis type="number" hide />
                                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fontWeight: "bold" }} width={120} />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#FF914D" barSize={25} radius={[8, 8, 0, 0]} />
                                  </BarChart>
                                </ResponsiveContainer>
                              </div>
                            )}

                            {widget.id === "recyclability-score" && (
                              <div className="recyclability-score">
                                <h3>Recyclability Score</h3>
                                <div className="chart-container">
                                  <PieChart width={130} height={130}>
                                    <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={55} startAngle={90} endAngle={-270} dataKey="value">
                                      {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                      ))}
                                    </Pie>
                                  </PieChart>
                                  <div className="score-text">{score}</div>
                                </div>
                                <p className="env-impact-title"><strong>Environmental Impact</strong></p>
                                <p className="env-impact-desc">Improper disposal of hazardous waste can contaminate soil, water, and air, posing serious risks to human health and ecosystems.</p>
                              </div>
                            )}

                            {widget.id === "facilities" && (
                              <div className="facilities">
                                <h3>Find Facilities</h3>
                                <div className="facility-tags">
                                  <span className="tag tag-distance">⬤ &lt;1km away</span>
                                  <span className="tag tag-type">Non-hazardous</span>
                                </div>
                                <div className="facility-content">
                                  <div className="facility-list">
                                    {["MRF #1", "MRF #2", "MRF #3"].map((facility, index) => (
                                      <div className="facility-item" key={index}>
                                        <MapPin size={18} className="location-icon" />
                                        <div>
                                          <p className="facility-name">{facility}</p>
                                          <p className="facility-address">23 Rizal St, Napindan, Taguig City</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="map-container">
                                    <img src="/assets/map.png" alt="Map" className="facility-map" />
                                  </div>
                                </div>
                              </div>
                            )}

                            {widget.id === "chat-section" && (
                              <div className="chat-section">
                                <h3>Talk with Hazel!</h3>
                                <div className="conversation">
                                  <div className="message hazel"><p><strong>Hazel:</strong> Hello! What can I help with?</p></div>
                                  <input type="text" placeholder="Enter your message here" />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;