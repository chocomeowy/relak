import { Form, Input, Row, Col, Typography, Rate, Spin, Button, Layout, Card } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";

const { Title, Text } = Typography;
const { Content } = Layout;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const JournalEdit = () => {
  const [obj, setObj] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://lepak.herokuapp.com/journals/${params.id}/`;
  const token = localStorage.token;
  const decoded = token ? jwtDecode(token) : null;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setObj(data))
      .catch((err) => console.error({ Error: err }));
  }, [url, token]);

  const onFinish = (values) => {
    if (!decoded) return;
    
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        title: values.title,
        entry: values.entry,
        mood: values.mood,
        profile: decoded.user_id,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Error in network");
      })
      .then((resJson) => {
        if (typeof resJson.mood === "object") {
          setError("Please indicate your mood.");
          return;
        }
        if (resJson.id) {
          return navigate("/profile/");
        }
      })
      .catch(() => setError("Failed to update. Please try again."));
  };

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "40px 24px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Title className="brand-font" style={{ color: "var(--primary)" }}>change the past.</Title>
            <Text type="secondary" style={{ fontSize: "18px" }}>
              Reflect and refine your journey.
            </Text>
          </div>

          <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12}>
              {obj ? (
                <Card className="glass-card" style={{ border: "none", borderRadius: "24px" }}>
                  <Form
                    name="edit-journal-form"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                      title: obj?.title,
                      entry: obj?.entry,
                      mood: obj?.mood,
                    }}
                    size="large"
                  >
                    <Form.Item
                      name="title"
                      label="Title"
                      rules={[{ required: true, message: 'Please enter a title' }]}
                    >
                      <Input style={{ borderRadius: "8px" }} />
                    </Form.Item>

                    <Form.Item
                      name="entry"
                      label="Journal Entry"
                      rules={[{ required: true, message: 'Please write something' }]}
                    >
                      <Input.TextArea rows={6} style={{ borderRadius: "8px" }} />
                    </Form.Item>

                    <Form.Item 
                      name="mood" 
                      label="Your Mood" 
                      rules={[{ required: true }]}
                      style={{ textAlign: "center" }}
                    >
                      <Rate 
                        character={({ index }) => customIcons[index + 1]} 
                        style={{ fontSize: "48px", color: "var(--primary)" }}
                      />
                    </Form.Item>

                    {error && <div style={{ marginBottom: "20px" }}><Text type="danger">{error}</Text></div>}

                    <Form.Item style={{ textAlign: "center", marginBottom: 0 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          height: "56px",
                          borderRadius: "28px",
                          padding: "0 60px",
                          backgroundColor: "var(--primary)",
                          border: "none",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        Save Changes
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              ) : (
                <div style={{ textAlign: "center", padding: "100px" }}>
                  <Spin size="large" />
                </div>
              )}
            </Col>
          </Row>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default JournalEdit;
