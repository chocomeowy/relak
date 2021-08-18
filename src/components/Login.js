import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import { Link, useHistory } from "react-router-dom";
const { Title } = Typography;

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const url = "https://lepak.herokuapp.com/api/token/";

  let history = useHistory();
  const onFinish = (event) => {
    //console.log(event);

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
        } else if (!res.ok) {
          console.log("res not okay", res);
          return res.json();
        }
        throw new Error("Error in network");
      })
      .then((resJson) => {
        console.log(resJson);
        if (resJson.detail) {
          setError(resJson.detail);
          return;
        }
        console.log(resJson);
        //dispatch({ ...logInAction(), payload: resJson.token });
        localStorage.setItem("token", resJson.access);
        return history.push("/profile");
      });
  };

  return (
    <>
      <div
        className="site-layout-content"
        style={{
          textAlign: "center",
        }}
      >
        <Title>login.</Title>
        <Title level={4}>welcome back.</Title>
        <br />
        <Row type="flex" justify="center" style={{ minHeight: "100vh" }}>
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
            {error ? error : <></>}
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
