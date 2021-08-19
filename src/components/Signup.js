import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { Typography } from "antd";
import { Link, useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logInAction } from "../redux/ducks/accountAuth";

const { Title } = Typography;
const Signup = () => {
  let history = useHistory();
  // const dispatch = useDispatch();
  const url = "https://lepak.herokuapp.com/user/signup/";
  const [error, setError] = useState(null);
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
        if (!res.ok) {
          console.log("res not okay", res);
          console.log("duplicated sign up username");
          // return res.json();
        } else if (res.ok) {
          console.log(res, "res");
          return res.json();
        }
        console.log("before new Error");
        throw new Error("Error in network");
      })
      .then((resJson) => {
        console.log(resJson);
        if (resJson.message) {
          return setError(resJson.message);
        } else if (resJson.success) {
          return history.push("/login/");
        } else {
          //console.log(resJson);
          // dispatch({ ...logInAction(), payload: resJson.token });
          // localStorage.setItem("token", resJson.token);
          return history.push("/login/");
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
        <Row
          type="flex"
          justify="center"
          style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
        >
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
            {error ? error : <></>}
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
