import React from "react";
import { motion } from "framer-motion";

const MessageAndButton = ({ resetToHome }) => {
  return (
    <>
      <motion.div
        className="absolute text-white text-4xl font-bold"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 Surprise Over! 🎉
      </motion.div>
      <motion.button
        className="absolute bg-white text-lg px-6 py-3 rounded-lg shadow-lg hover:scale-110 focus:outline-none"
        style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)" }}
        onClick={resetToHome}
      >
        Go to Home
      </motion.button>
    </>
  );
};

export default MessageAndButton;
