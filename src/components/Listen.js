import React from "react";
import ForestRain from "./ForestRain";
import HeavyRain from "./HeavyRain";
import WindChime from "./WindChime";
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
