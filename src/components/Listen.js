import React from "react";
import ForestRain from "./sounds/ForestRain";
import HeavyRain from "./sounds/HeavyRain";
import WindChime from "./sounds/WindChime";
import Title from "antd/lib/typography/Title";
import WhiteNoise from "./sounds/WhiteNoise";
import FrogSound from "./sounds/FrogSound";
const Listen = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Title>listen.</Title>
      <ForestRain />
      <HeavyRain />
      <WindChime />
      <WhiteNoise />
      <FrogSound />
    </div>
  );
};

export default Listen;
