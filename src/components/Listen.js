import React from "react";
import ForestRain from "./sounds/ForestRain";
import HeavyRain from "./sounds/HeavyRain";
import WindChime from "./sounds/WindChime";
import Title from "antd/lib/typography/Title";
import WhiteNoise from "./sounds/WhiteNoise";
import FrogSound from "./sounds/FrogSound";
import SingingBowl from "./sounds/SingingBowl";
import BirdsSound from "./sounds/BirdsSound";
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
      <SingingBowl />
      <FrogSound />
      <BirdsSound />
    </div>
  );
};

export default Listen;
