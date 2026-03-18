import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const Login = () => {
  const [error, setError] = useState(null);

  const url = "https://lepak.herokuapp.com/api/token/";

  const navigate = useNavigate();
  const onFinish = (event) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: event.username,
        password: event.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (!res.ok) {
          return res.json();
        }
        throw new Error("Error in network");
      })
      .then((resJson) => {
        if (resJson.detail) {
          setError(resJson.detail);
          return;
        }

        localStorage.setItem("token", resJson.access);
        return navigate("/profile");
      });
  };

  return (
    <>
      <div
        className="site-layout-content"
        style={{
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Title>login.</Title>
        <Title level={4}>welcome back.</Title>
        <br />
        <Row justify="center" style={{ backgroundColor: "#f5f5f5" }}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Text type="danger">{error ? error : <></>}</Text>
            <Title level={5}>
              New here?
              <Link to="/signup"> Register with us!</Link>
            </Title>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default Login;
