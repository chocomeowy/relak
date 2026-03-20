import { Typography, Row, Col, Layout, Space, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedIcon from "./AnimatedIcon";
import Tilt from "react-parallax-tilt";

const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const Home = () => {
  const token = localStorage.token;

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "60px 24px", minHeight: "calc(100vh - 150px)" }}>
        <Row justify="center" align="middle" gutter={[0, 48]}>
          <Col xs={24} md={20} lg={16} style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Space direction="vertical" size={24} style={{ width: "100%" }}>
                <Tilt
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  scale={1.02}
                  gyroscope={true}
                >
                  <div
                    style={{
                      height: "120px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <AnimatedIcon />
                  </div>
                </Tilt>

                <Title
                  className="brand-font"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 5rem)",
                    marginBottom: 0,
                    color: "var(--primary)",
                    letterSpacing: "-2px",
                  }}
                >
                  time to relak
                </Title>

                <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                  <Text
                    style={{
                      fontSize: "20px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    A sanctuary for your thoughts. Breathe, listen, and find
                    your center in the heart of Singapore.
                  </Text>
                </div>

                <Space
                  direction="horizontal"
                  size={20}
                  style={{ marginTop: "40px" }}
                >
                  <Link to="/breathe">
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        height: "56px",
                        padding: "0 40px",
                        borderRadius: "28px",
                        fontSize: "18px",
                        fontWeight: 600,
                        backgroundColor: "var(--primary)",
                        border: "none",
                        boxShadow: "0 10px 20px rgba(45, 90, 94, 0.2)",
                      }}
                    >
                      Breathe
                    </Button>
                  </Link>
                  <Link to="/listen">
                    <Button
                      size="large"
                      style={{
                        height: "56px",
                        padding: "0 40px",
                        borderRadius: "28px",
                        fontSize: "18px",
                        fontWeight: 600,
                        border: "2px solid var(--primary)",
                        color: "var(--primary)",
                        background: "transparent",
                      }}
                    >
                      Listen
                    </Button>
                  </Link>
                </Space>

                {token === undefined && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{ marginTop: "24px" }}
                  >
                    <Link to="/login">
                      <Button
                        type="link"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Already have an account? Login here.
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </Space>
            </motion.div>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: "center", background: "transparent", paddingBottom: "40px" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} Relak. Made with love for Singaporeans.
          <br />
          <Space split={<span style={{ color: "#ccc" }}>|</span>} style={{ marginTop: "8px" }}>
            <a href="https://github.com/chocomeowy/relak" target="_blank" rel="noreferrer">
              Relak Frontend
            </a>
            <a href="https://github.com/chocomeowy/lepak" target="_blank" rel="noreferrer">
              Lepak Backend
            </a>
          </Space>
        </Text>
      </Footer>
    </Layout>
  );
};

export default Home;
