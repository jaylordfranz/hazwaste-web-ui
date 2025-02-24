import React from "react";
import "../css/History.css";

const historyData = [
    {
      id: 1,
      image: "/assets/plastic.png", // Correct absolute path
      classification: "Plastic",
      date: "Feb 18, 2025",
      time: "10:30 AM",
    },
    {
      id: 2,
      image: "/assets/metal.jpg", // Corrected path
      classification: "Metal",
      date: "Feb 19, 2025",
      time: "2:45 PM",
    },
    {
      id: 3,
      image: "/assets/glass.jpg",
      classification: "Glass",
      date: "Feb 20, 2025",
      time: "5:00 PM",
    },
    {
      id: 4,
      image: "/assets/paper.webp",
      classification: "Paper",
      date: "Feb 21, 2025",
      time: "9:15 AM",
    },
    {
      id: 5,
      image: "/assets/organic.jpg",
      classification: "Organic",
      date: "Feb 22, 2025",
      time: "3:30 PM",
    },
    {
      id: 6,
      image: "/assets/electronic.jpg",
      classification: "Electronic",
      date: "Feb 23, 2025",
      time: "6:45 PM",
    },
  ];  

const History = () => {
  return (
    <div className="history-container">
      <h1 className="history-title">Scan History</h1>
      <div className="history-gallery">
        {historyData.map((item) => (
          <div key={item.id} className="history-card">
            <img src={item.image} alt={item.classification} className="history-image" />
            <div className="history-info">
              <h3 className="history-classification">{item.classification}</h3>
              <p className="history-timestamp">{item.date} - {item.time}</p>
              <a href={`/history/${item.id}`} className="history-link">See More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;