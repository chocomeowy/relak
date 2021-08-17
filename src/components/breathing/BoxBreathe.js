import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const BoxBreathe = () => {
  const text = ["Breathe in", "Hold", "Breathe out", "Hold"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex((i) => i + 1);
    const intervalID = setInterval(tick, 4000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      <Square viewBox="0 0 100 100">
        <SquarePath
          d="M 10 10 H 90 V 90 H 10 L 10 8.5 Z"
          transition={{
            duration: 16,
            ease: "linear",
            // repeatDelay: 4,
            repeat: 10,
            repeatType: "reverse",
          }}
        />
      </Square>
      <div>{text[index % text.length]}</div>
    </>
  );
};

export default BoxBreathe;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};

const Square = styled(motion.svg)`
  width: 300px;
  overflow: visible;
  fill: none;
  stroke: #00cccc;
  stroke-width: 3px;
`;

const SquarePath = styled(motion.path).attrs(() => ({
  initial: "hidden",
  variants: pathVariants,
  animate: "visible",
}))``;
