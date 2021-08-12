import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";

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
      <Title
        style={{
          textAlign: "center",
        }}
      >
        sign up.
      </Title>
      <Title
        level={4}
        style={{
          textAlign: "center",
        }}
      >
        say hello. track your progress with us.
      </Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Title
        level={5}
        style={{
          textAlign: "center",
        }}
      >
        Already have an account?
        <a href="/login"> Login!</a>
      </Title>
    </>
  );
};

export default Signup;
