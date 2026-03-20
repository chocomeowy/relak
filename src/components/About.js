import React from "react";
import { Collapse, Layout, Row, Col, Typography, Space } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;
const { Content, Footer } = Layout;

const About = () => {
  const { Panel } = Collapse;
  const currentYear = new Date().getFullYear();

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "40px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Title className="brand-font" style={{ color: "var(--primary)" }}>
              welcome to relak.
            </Title>
            <Title level={3} style={{ fontWeight: 300, color: "var(--text-secondary)" }}>
              the wellness app for Singaporeans, by Singaporeans.
            </Title>
          </div>

          <Row justify="center">
            <Col xs={24} sm={18} md={12}>
              {/* Optional space where the quote used to be if needed down the road */}
            </Col>
          </Row>

          <Collapse
            accordion
            className="glass-card"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              border: "none",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Panel header="Who are we?" key="1" style={{ border: "none" }}>
              <p>
                We are a group of software engineers who share a passion for
                mental health and wellness. Mental health is something extremely
                important for general wellbeing, and it is imperative in the
                fast-paced world of today that we take steps to manage it
                properly, in a convenient and efficient way.
              </p>
            </Panel>
            <Panel header="Why this app?" key="2" style={{ border: "none" }}>
              <p>
                Despite the plethora of existing relaxation and mental wellness
                apps on the Internet, we discovered that there was no localized
                app for Singaporeans. Furthermore, we noticed that most apps
                were standalone features (like mood journaling, sound effects,
                breathing). We wanted to unify all of those concepts under a
                single app, dedicated just for Singaporeans.
              </p>
            </Panel>
            <Panel header="How much is it?" key="3" style={{ border: "none" }}>
              <p>
                It's free, and always will be. Mental wellness should never come
                at a price.
              </p>
            </Panel>
            <Panel header="What can this app do for me?" key="4" style={{ border: "none" }}>
              <p>
                For starters, check out the breathing application. By following
                the animated diagram on the screen, tailor your breaths to what
                is displayed on the screen. Breathing is extremely important and
                has an immediate effect on wellbeing and relaxation.
              </p>
              <p style={{ marginTop: "16px" }}>
                The sound component offers a myriad range of relaxing sound and
                noises, perfect for focus - or to allow you to experience the
                sounds of nature right from your device.
              </p>
              <p style={{ marginTop: "16px" }}>
                Check out the mood journal too. Enter in your moods and how you
                feel, and look at the chart for an overview of how you've been
                over the week.
              </p>
              <p style={{ marginTop: "16px" }}>
                If you need help - be it chat or counselling, click on{" "}
                <Text strong>"Get Help"</Text> - there are many resources there which can
                steer you in the right direction.
              </p>
            </Panel>
          </Collapse>
        </motion.div>
      </Content>
      <Footer style={{ textAlign: "center", background: "transparent", padding: "48px 24px" }}>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          &copy; {currentYear} <span className="brand-font" style={{ color: "var(--primary)" }}>relak</span>. 
          Made with love by Gordon, Fah Jin, and Charlene.
        </Text>
        <div style={{ marginTop: "8px" }}>
          <Space>
            <a href="https://github.com/chocomeowy/relak" target="_blank" rel="noreferrer">GitHub</a>
            <Text type="secondary">|</Text>
            <a href="https://github.com/chocomeowy/lepak" target="_blank" rel="noreferrer">Lepak</a>
          </Space>
        </div>
      </Footer>
    </Layout>
  );
};

export default About;
