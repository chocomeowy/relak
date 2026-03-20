import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Layout, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const { Title, Text } = Typography;
const { Content } = Layout;

const Signup = () => {
  const navigate = useNavigate();
  const url = "https://lepak.herokuapp.com/user/signup/";
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json();
        return res.json();
      })
      .then((resJson) => {
        if (resJson.message) {
          return setError(resJson.message);
        } else {
          return navigate("/login/");
        }
      })
      .catch(() => setError("Connection error. Please try again."));
  };

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "40px 24px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Title className="brand-font" style={{ color: "var(--primary)" }}>sign up.</Title>
            <Title level={4} style={{ fontWeight: 300, color: "var(--text-secondary)" }}>
              say hello. track your progress with us.
            </Title>
          </div>

          <Row justify="center">
            <Col xs={24} sm={16} md={12} lg={8}>
              <Card className="glass-card" style={{ border: "none", borderRadius: "24px" }}>
                <Form
                  name="signup-form"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  size="large"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                  >
                    <Input style={{ borderRadius: "8px" }} placeholder="Choose a username" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                  >
                    <Input.Password style={{ borderRadius: "8px" }} placeholder="Choose a password" />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  {error && <div style={{ marginBottom: "20px" }}><Text type="danger">{error}</Text></div>}

                  <Form.Item style={{ marginBottom: "16px" }}>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      block
                      style={{ 
                        height: "48px", 
                        borderRadius: "24px", 
                        backgroundColor: "var(--primary)",
                        border: "none",
                        fontWeight: 600,
                        boxShadow: "0 4px 12px rgba(45, 90, 94, 0.2)"
                      }}
                    >
                      Sign Up
                    </Button>
                  </Form.Item>

                  <div style={{ textAlign: "center" }}>
                    <Text type="secondary">Already have an account?</Text>
                    <Link to="/login" style={{ marginLeft: "8px", fontWeight: 600, color: "var(--primary)" }}>
                      Login!
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default Signup;
