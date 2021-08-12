import { Button, Checkbox, Form, Input, Typography } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import { useHistory } from "react-router-dom";
const { Title } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const url = "http://localhost:8000/user/login/";
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  let history = useHistory();
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
    })
      .then((res) => {
        if (res.ok) {
          //console.log(res);
          return res.json();
        }
        throw new Error("Error in network");
      })
      .then((resJson) => {
        console.log(resJson);
        if (resJson.error) {
          return;
        } else {
          //console.log(resJson);
          dispatch({ ...logInAction(), payload: resJson.token });

          return history.push("/");
        }
      });
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Title
          style={{
            textAlign: "center",
          }}
        >
          login.
        </Title>
        <Title
          level={4}
          style={{
            textAlign: "center",
          }}
        >
          welcome back.
        </Title>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
            wrapperCol={{ offset: 4, span: 10 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
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
          New here?
          <a href="/signup"> Register with us!</a>
        </Title>
      </div>
    </>
  );
};

export default Login;
