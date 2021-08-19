import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimatedIcon = () => {
  return (
    <>
      <Square
        viewBox="0 0 30 30"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <SquarePath
          d="M2,2L2,30L2,14C2,11.14 4.288,10 7,10C9.712,10 13.026,14 18,14C22.974,14 27,11 27,11C27,11 21.702,5 19,5C16.298,5 13,7 13,7C13,7 16.157,9.982 19,10"
          transition={{
            duration: 2,
            ease: "linear",
            // repeatDelay: 4,
          }}
        />
      </Square>
    </>
  );
};

export default AnimatedIcon;

const svgVariants = {
  hidden: { rotate: -360 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

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
  width: 100px;
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
