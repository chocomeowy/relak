import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Space, Typography, Segmented } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import FramerMotionBreathe from "./FramerMotionBreathe";
import Meditation from "./Meditation";
import Sleep from "./Sleep";
import BreathingTechniquesModal from "./BreathingTechniquesModal";
import Headspace from "./Headspace";
import Breathe2 from "./Breathe2";

const { Content } = Layout;
const { Title, Text } = Typography;

const Breathe = () => {
  const [pattern, setPattern] = useState("equal");
  const [isActive, setIsActive] = useState(false);
  const [instruction, setInstruction] = useState("Ready to begin?");
  const [step, setStep] = useState(0);

  const patterns = {
    equal: {
      label: "Equal Breathing",
      desc: "6s-6s Sama Vritti",
      instructions: ["Inhale...", "", "Exhale...", ""],
      times: [6, 0, 6, 0],
    },
    box: {
      label: "Box Breathing",
      desc: "4s-4s-4s-4s - focus and calm",
      instructions: ["Inhale", "Hold", "Exhale", "Hold"],
      times: [4, 4, 4, 4],
    },
    deep: {
      label: "Deep Calming",
      desc: "4s-7s-8s - deep relaxation",
      instructions: ["Inhale", "Hold", "Exhale", ""],
      times: [4, 7, 8, 0],
    },
    apple: {
      label: "Apple Style",
      desc: "Visual focus exercise",
      instructions: ["Breathe in", "", "Breathe out", ""],
      times: [4, 0, 4, 0],
    },
  };

  useEffect(() => {
    if (!isActive) {
      setInstruction("Focus on the present moment");
      setStep(0);
      return;
    }

    const currentPattern = patterns[pattern];
    setInstruction(currentPattern.instructions[step]);
    
    const duration = currentPattern.times[step];
    
    if (duration === 0) {
      setStep((prev) => (prev + 1) % 4);
      return;
    }

    const timeoutId = setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
    }, duration * 1000);
    
    return () => clearTimeout(timeoutId);
  }, [isActive, pattern, step]);

  return (
    <Layout style={{ background: "transparent", minHeight: "80vh" }}>
      <Content style={{ padding: "40px 24px" }}>
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.div
              key="setup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: "center" }}
            >
              <Title className="brand-font" style={{ color: "var(--primary)" }}>
                breathe.
              </Title>
              <Space direction="vertical" size={32} style={{ width: "100%" }}>
                <Segmented
                  size="large"
                  options={[
                    { label: "Equal", value: "equal" },
                    { label: "Box", value: "box" },
                    { label: "Deep", value: "deep" },
                    { label: "Apple", value: "apple" },
                  ]}
                  value={pattern}
                  onChange={setPattern}
                />
                
                <div style={{ height: "60px" }}>
                  <Text type="secondary" style={{ fontSize: "18px" }}>
                    {patterns[pattern].desc}
                  </Text>
                </div>

                <Button
                  type="primary"
                  size="large"
                  onClick={() => setIsActive(true)}
                  style={{
                    height: "56px",
                    borderRadius: "28px",
                    padding: "0 60px",
                    backgroundColor: "var(--primary)",
                    border: "none",
                  }}
                >
                  Start Exercise
                </Button>
              </Space>
            </motion.div>
          ) : (
            <motion.div
              key="active"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "60vh",
              }}
            >
              <div style={{ marginBottom: "60px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={instruction}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Title level={2} style={{ fontWeight: 300, color: "var(--text-secondary)" }}>
                      {instruction}
                    </Title>
                  </motion.div>
                </AnimatePresence>
              </div>

              {pattern === "apple" ? (
                <Breathe2 />
              ) : (
                <FramerMotionBreathe pattern={pattern} step={step} />
              )}

              <Button
                type="text"
                onClick={() => setIsActive(false)}
                style={{ marginTop: "100px", color: "var(--text-secondary)" }}
              >
                End Session
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: "80px", textAlign: "center" }}
          >
            <Row justify="center" gutter={[32, 32]}>
              <Col><Meditation /></Col>
              <Col><Sleep /></Col>
              <Col><BreathingTechniquesModal /></Col>
            </Row>
            <Row justify="center" style={{ marginTop: "40px" }}>
              <Headspace />
            </Row>
          </motion.div>
        )}
      </Content>
    </Layout>
  );
};

export default Breathe;
