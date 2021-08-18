import React from "react";
import { Card, List } from "antd";
import ForestRain from "./sounds/ForestRain";
import HeavyRain from "./sounds/HeavyRain";
import WindChime from "./sounds/WindChime";
import Title from "antd/lib/typography/Title";
import BrownNoise from "./sounds/BrownNoise";
import FrogSound from "./sounds/FrogSound";
import SingingBowl from "./sounds/SingingBowl";
import BirdsSound from "./sounds/BirdsSound";
const Listen = () => {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Title>listen.</Title>
      <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}>
      <List.Item>
        <Card hoverable><HeavyRain /></Card>
        <Card hoverable><ForestRain /></Card>
        <Card hoverable><BirdsSound /></Card>
        <Card hoverable><FrogSound /></Card>
        <Card hoverable><SingingBowl /></Card>
        <Card hoverable><WindChime /></Card>
        <Card hoverable><BrownNoise /></Card>
      </List.Item>
    
      </List>
    
    </div>
  );
};

export default Listen;
