import React from "react";
import ForestRain from "./sounds/ForestRain";
import HeavyRain from "./sounds/HeavyRain";
import WindChime from "./sounds/WindChime";
import Title from "antd/lib/typography/Title";
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
    </div>
  );
};

export default Listen;
