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
  const data = [
    { sound: <HeavyRain />, color: "#ffb3ba" },
    { sound: <ForestRain />, color: "#ffdfba" },
    { sound: <BirdsSound />, color: "	#ffffba" },
    { sound: <FrogSound />, color: "#baffc9" },
    { sound: <SingingBowl />, color: "#bae1ff" },
    { sound: <WindChime />, color: "#d0ddff" },
    { sound: <BrownNoise />, color: "#e1bfff" },
  ];
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
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable style={{ backgroundColor: item.color }}>
              {item.sound}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Listen;
