import React from "react";
import { motion } from "framer-motion";

const RainAnimation = ({ selectedIcon }) => {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];

  const generateRain = () => {
    const rainDrops = [];
    for (let i = 0; i < 20; i++) {
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 2;
      rainDrops.push(
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: "-10%",
            left: `${randomLeft}%`,
            fontSize: "4rem",
            color: colors[Math.floor(Math.random() * colors.length)],
          }}
          animate={{ y: "110vh" }}
          transition={{ duration: 3, delay: randomDelay }}
        >
          {selectedIcon}
        </motion.div>
      );
    }
    return rainDrops;
  };

  return <>{generateRain()}</>;
};

export default RainAnimation;
