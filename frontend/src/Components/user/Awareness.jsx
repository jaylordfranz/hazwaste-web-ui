// src/Components/user/Awareness.jsx
import { useState, useEffect } from "react";
import "../css/Awareness.css";
import { FaRecycle, FaMobileAlt, FaGlassWhiskey, FaAppleAlt, FaTrashAlt, FaBeer, FaLeaf, FaLaptop, FaTint, FaUtensils } from "react-icons/fa";

const wasteItems = [
  { id: 1, type: "Plastic", label: "Plastic Bottle", icon: <FaTint /> },
  { id: 2, type: "Metal", label: "Aluminum Can", icon: <FaBeer /> },
  { id: 3, type: "Glass", label: "Glass Jar", icon: <FaGlassWhiskey /> },
  { id: 4, type: "Organic", label: "Banana Peel", icon: <FaAppleAlt /> },
  { id: 5, type: "E-Waste", label: "Old Phone", icon: <FaMobileAlt /> },
  { id: 6, type: "Plastic", label: "Plastic Straw", icon: <FaUtensils /> },
  { id: 7, type: "Metal", label: "Tin Can", icon: <FaTrashAlt /> },
  { id: 8, type: "Glass", label: "Broken Glass", icon: <FaGlassWhiskey /> },
  { id: 9, type: "Organic", label: "Apple Core", icon: <FaLeaf /> },
  { id: 10, type: "E-Waste", label: "Laptop Charger", icon: <FaLaptop /> }
];

const bins = ["Plastic", "Metal", "Glass", "Organic", "E-Waste"];

const Awareness = () => {
  const [fallingItem, setFallingItem] = useState(null);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [itemsDropped, setItemsDropped] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (!audio) {
      const newAudio = new Audio("/assets/game-audio.mp3");
      newAudio.loop = true;
      setAudio(newAudio);
    }
  }, []);

  useEffect(() => {
    if (itemsDropped >= 10) {
      setGameOver(true);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      return;
    }
    
    if (!isPaused && audio && !gameOver) {
      audio.play().catch(() => console.log("Audio play was blocked by the browser"));
    }
    
    const interval = !isPaused ? setInterval(() => {
      setFallingItem(wasteItems[Math.floor(Math.random() * wasteItems.length)]);
    }, 3000) : null;

    return () => interval && clearInterval(interval);
  }, [itemsDropped, gameOver, isPaused]);

  const handleDrop = (binType) => {
    if (fallingItem && fallingItem.type === binType) {
      setScore(score + 1);
    } else {
      setMissed(missed + 1);
    }
    setFallingItem(null);
    setItemsDropped(itemsDropped + 1);
  };

  const restartGame = () => {
    setScore(0);
    setMissed(0);
    setItemsDropped(0);
    setGameOver(false);
    setFallingItem(null);
    setIsPaused(false);
    if (audio) {
      audio.play();
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (audio) {
      isPaused ? audio.play() : audio.pause();
    }
  };

  return (
    <div className="awareness-container">
      <h2 className="awareness-title">HazWaste Game On!</h2>
      <p className="score">Score: {score} | Missed: {missed}</p>
      {!gameOver ? (
        <>
          <div className="falling-item">{fallingItem ? <>{fallingItem.icon} {fallingItem.label}</> : ""}</div>
          <div className="bins-container">
            {bins.map((bin) => (
              <button key={bin} className="bin" onClick={() => handleDrop(bin)}>
                {bin}
              </button>
            ))}
          </div>
          <button className="pause-button" onClick={togglePause}>{isPaused ? "Resume" : "Pause"}</button>
        </>
      ) : (
        <div className="game-over-popup">
          <h2>Game Over!</h2>
          <p>Your Score: {score}</p>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Awareness;