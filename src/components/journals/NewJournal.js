import { Form, Input, Row, Col, Typography, Rate, Button, Space, Layout, Card } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

const NewJournal = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const url = "https://lepak.herokuapp.com/journals/";
  const token = localStorage.token;
  const decoded = token ? jwtDecode(token) : null;

  const onFinish = (values) => {
    if (!decoded) return;
    
    fetch(url, {
      method: "POST",
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
        if (resJson.message) {
          setError(resJson.message);
          return;
        }
        navigate("/profile");
      });
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
            <Title className="brand-font" style={{ color: "var(--primary)" }}>write.</Title>
            <Text type="secondary" style={{ fontSize: "18px" }}>
              Capture your thoughts and feelings.
            </Text>
          </div>

          <Row justify="center">
            <Col xs={24} sm={20} md={16} lg={12}>
              <Card className="glass-card" style={{ border: "none", borderRadius: "24px" }}>
                <Form
                  name="journal-form"
                  layout="vertical"
                  onFinish={onFinish}
                  initialValues={{ mood: 3 }}
                  size="large"
                >
                  <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please enter a title' }]}
                  >
                    <Input placeholder="What's on your mind?" style={{ borderRadius: "8px" }} />
                  </Form.Item>

                  <Form.Item
                    name="entry"
                    label="Journal Entry"
                    rules={[{ required: true, message: 'Please write something' }]}
                  >
                    <Input.TextArea 
                      rows={6} 
                      placeholder="Today felt like..." 
                      style={{ borderRadius: "8px" }}
                    />
                  </Form.Item>

                  <Form.Item 
                    name="mood" 
                    label="How are you feeling?" 
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
                        boxShadow: "0 8px 16px rgba(45, 90, 94, 0.2)",
                      }}
                    >
                      Post Entry
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default NewJournal;
