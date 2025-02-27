import React, { useState } from "react";
import { motion } from "framer-motion";
import RainAnimation from "./RainAnimation";
import ExplosionAnimation from "./ExplosionAnimation";
import MessageAndButton from "./MessageAndButton";

const Home = () => {
  const [showRain, setShowRain] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [background, setBackground] = useState("linear-gradient(135deg, #f6d365, #fda085)");
  const [showExplosion, setShowExplosion] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const surpriseOptions = ["✨", "🦄", "🚀", "🍕", "💃", "🎉", "🌟", "😄", "🌈"];
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];

  const startRain = () => {
    const randomIcon = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setSelectedIcon(randomIcon);
    setShowRain(true);
    setShowExplosion(true);
    setBackground(colors[Math.floor(Math.random() * colors.length)]);
    setTimeout(() => {
      setShowRain(false);
      setShowExplosion(false);
      setShowMessage(true);
    }, 4000);
  };

  const resetToHome = () => {
    setShowRain(false);
    setSelectedIcon(null);
    setShowExplosion(false);
    setShowMessage(false);
    setBackground("linear-gradient(135deg, #f6d365, #fda085)");
  };

  return (
    <div
      id="root"
      style={{
        background: background,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {!showRain && !showMessage && (
        <div style={{ zIndex: 10 }}>
          <h1 className="text-4xl font-bold text-white mb-6">Press the Button for a Surprise!</h1>
          <motion.button
            className="bg-white text-lg px-6 py-3 rounded-lg shadow-lg hover:scale-110 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)" }}
            onClick={startRain}
          >
            Surprise Me!
          </motion.button>
        </div>
      )}

      {showRain && <RainAnimation selectedIcon={selectedIcon} />}
      {showExplosion && <ExplosionAnimation selectedIcon={selectedIcon} />}
      {showMessage && <MessageAndButton resetToHome={resetToHome} />}
    </div>
  );
};

export default Home;