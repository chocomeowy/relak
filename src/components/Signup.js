import React from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { Typography } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
const { Title } = Typography;
const Signup = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const url = "https://lepak.herokuapp.com/user/signup/";

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
        if (!res.ok) {
          console.log("res not okay", res);
          console.log("duplicated sign up username");
        } else if (res.ok) {
          console.log(res, "res");
          return history.push("/login/");
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
          localStorage.setItem("token", resJson.token);
          return history.push("/");
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
