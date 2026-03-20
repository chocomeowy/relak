import React from "react";
import { motion } from "framer-motion";

const Breathe2 = () => {
  const petals = [0, 60, 120, 180, 240, 300];

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {petals.map((angle, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: i % 2 === 0 ? "#61bea2" : "#529ca0",
              mixBlendMode: "screen",
              top: "50px",
              left: "50px",
              transformOrigin: "center center",
            }}
            animate={{
              x: [0, 40 * Math.cos((angle * Math.PI) / 180), 0],
              y: [0, 40 * Math.sin((angle * Math.PI) / 180), 0],
              scale: [0.15, 1, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: [0.5, 0, 0.5, 1],
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Breathe2;
