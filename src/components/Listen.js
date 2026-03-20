import { Card, List, Typography, Row, Col, Layout } from "antd";
import React from "react";
import { motion } from "framer-motion";
import ForestRain from "./sounds/ForestRain";
import HeavyRain from "./sounds/HeavyRain";
import WindChime from "./sounds/WindChime";
import BrownNoise from "./sounds/BrownNoise";
import FrogSound from "./sounds/FrogSound";
import SingingBowl from "./sounds/SingingBowl";
import BirdsSound from "./sounds/BirdsSound";
import OceanWaves from "./sounds/OceanWaves";

const { Title, Text } = Typography;
const { Content } = Layout;

const Listen = () => {
  const data = [
    { name: "Heavy Rain", component: <HeavyRain />, icon: "🌧️" },
    { name: "Forest Rain", component: <ForestRain />, icon: "🌿" },
    { name: "Ocean Waves", component: <OceanWaves />, icon: "🌊" },
    { name: "Birds", component: <BirdsSound />, icon: "🐦" },
    { name: "Frogs", component: <FrogSound />, icon: "🐸" },
    { name: "Singing Bowl", component: <SingingBowl />, icon: "🥣" },
    { name: "Wind Chime", component: <WindChime />, icon: "🎐" },
    { name: "Brown Noise", component: <BrownNoise />, icon: "🔊" },
  ];

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "40px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <Title className="brand-font" style={{ color: "var(--primary)" }}>
            listen.
          </Title>
          <Text type="secondary" style={{ fontSize: "18px" }}>
            Immerse yourself in calming soundscapes.
          </Text>
        </div>

        <List
          grid={{
            gutter: 24,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="glass-card"
                  hoverable
                  style={{
                    height: "100%",
                    textAlign: "center",
                    border: "none",
                  }}
                  bodyStyle={{ padding: "24px" }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>
                    {item.icon}
                  </div>
                  {item.component}
                </Card>
              </motion.div>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default Listen;
