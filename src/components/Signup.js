import React from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { Typography } from "antd";
import { Link, useHistory } from "react-router-dom";

const { Title } = Typography;
const Signup = () => {
  let history = useHistory();
  const url = "http://localhost:8000/user/signup/";

  const onFinish = (event) => {
    console.log(event);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: event.username,
        password: event.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        console.log(res, "res");
        return history.push("/login/");
      }
      throw new Error("Error in network");
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
        }}
      >
        <Title>sign up.</Title>
        <Title level={4}>say hello. track your progress with us.</Title>
        <br />
        <Row type="flex" justify="center" style={{ minHeight: "100vh" }}>
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
