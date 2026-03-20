import React, { useState } from "react";
import ReactHowler from "react-howler";
import { Button, Typography, Space } from "antd";
import { PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons";

const { Text } = Typography;

const OceanWaves = () => {
  const [play, setPlay] = useState(false);

  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <div>
        <Text strong style={{ fontSize: "18px", display: "block" }}>Ocean Waves</Text>
        <Text type="secondary" style={{ fontSize: "12px" }}>Rhythmic beach waves.</Text>
      </div>
      
      <ReactHowler 
        src="https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg" 
        playing={play} 
        loop={true} 
      />

      <Button
        type={play ? "primary" : "default"}
        shape="circle"
        icon={play ? <PauseCircleFilled style={{ fontSize: '24px' }} /> : <PlayCircleFilled style={{ fontSize: '24px' }} />}
        onClick={() => setPlay(!play)}
        style={{
          width: "64px",
          height: "64px",
          border: play ? "none" : "1px solid var(--primary)",
          backgroundColor: play ? "var(--primary)" : "transparent",
          color: play ? "white" : "var(--primary)",
          boxShadow: play ? "0 4px 12px rgba(45, 90, 94, 0.3)" : "none",
        }}
      />
    </Space>
  );
};

export default OceanWaves;
