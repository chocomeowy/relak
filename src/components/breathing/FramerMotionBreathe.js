import React from "react";
import { motion } from "framer-motion";

const FramerMotionBreathe = ({ pattern = "equal", step = 0 }) => {
  const patterns = {
    equal: [6, 0, 6, 0],
    box: [4, 4, 4, 4],
    deep: [4, 7, 8, 0],
  };

  const durations = patterns[pattern] || patterns.equal;
  
  // Use a minimal duration if 0 so framer motion handles the jump cleanly
  const duration = Math.max(durations[step] || 4, 0.01);

  const isBox = pattern === "box";

  // Step 0: Inhale (scale up to 1.5, opacity 0.8)
  // Step 1: Hold (stay at 1.5, opacity 0.8)
  // Step 2: Exhale (scale down to 1, opacity 0.3)
  // Step 3: Hold (stay at 1, opacity 0.3)
  
  const targetScale = (step === 0 || step === 1) ? 1.5 : 1;
  const targetOpacity = (step === 0 || step === 1) ? 0.8 : 0.3;
  const targetBorderRadius = isBox ? "20%" : "50%";

  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      {/* Outer Pulse / Aura */}
      <motion.div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          zIndex: 0,
        }}
        initial={{ scale: 1, opacity: 0.15, borderRadius: targetBorderRadius }}
        animate={{
          scale: targetScale,
          opacity: targetOpacity * 0.5,
          borderRadius: targetBorderRadius,
        }}
        transition={{ duration, ease: "easeInOut" }}
      />

      {/* Main Shape */}
      <motion.div
        style={{
          position: "absolute",
          top: "25%", left: "25%", width: "50%", height: "50%",
          backgroundColor: "var(--primary)",
          boxShadow: "0 0 40px var(--primary-light)",
          zIndex: 1,
        }}
        initial={{ scale: 1, opacity: 0.3, borderRadius: targetBorderRadius }}
        animate={{
          scale: targetScale,
          opacity: targetOpacity,
          borderRadius: targetBorderRadius,
        }}
        transition={{ duration, ease: "easeInOut" }}
      />

      {/* Inner Glow */}
      <motion.div
        style={{
          position: "absolute",
          top: "35%", left: "35%", width: "30%", height: "30%",
          backgroundColor: "white",
          filter: "blur(8px)",
          zIndex: 2,
        }}
        initial={{ scale: 1, opacity: 0.2, borderRadius: targetBorderRadius }}
        animate={{
          scale: targetScale,
          opacity: targetOpacity * 0.75,
          borderRadius: targetBorderRadius,
        }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FramerMotionBreathe;
