import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const Signup = () => {
  const navigate = useNavigate();
  const url = "https://lepak.herokuapp.com/user/signup/";
  const [error, setError] = useState(null);
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
        if (!res.ok) {
          return res.json();
        } else if (res.ok) {
          return res.json();
        }
        throw new Error("Error in network");
      })
      .then((resJson) => {
        if (resJson.message) {
          return setError(resJson.message);
        } else if (resJson.success) {
          return navigate("/login/");
        } else {
          return navigate("/login/");
        }
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        <Title>sign up.</Title>
        <Title level={4}>say hello. track your progress with us.</Title>
        <br />
        <Row justify="center" style={{ backgroundColor: "#f5f5f5" }}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
              Already have an account?
              <Link to="/login"> Login!</Link>
            </Title>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default Signup;
