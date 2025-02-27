import React from "react";
import { motion } from "framer-motion";

const ExplosionAnimation = ({ selectedIcon }) => {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];

  const generateExplosion = () => {
    const explosionIcons = [];
    for (let i = 0; i < 10; i++) {
      const randomAngle = Math.random() * 360;
      const randomDistance = Math.random() * 200 + 50;
      const x = Math.cos((randomAngle * Math.PI) / 180) * randomDistance;
      const y = Math.sin((randomAngle * Math.PI) / 180) * randomDistance;

      explosionIcons.push(
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "3rem",
            color: colors[Math.floor(Math.random() * colors.length)],
          }}
          animate={{ x, y, opacity: [1, 0] }}
          transition={{ duration: 1.5 }}
        >
          {selectedIcon}
        </motion.div>
      );
    }
    return explosionIcons;
  };

  return <>{generateExplosion()}</>;
};

export default ExplosionAnimation;