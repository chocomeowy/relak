import { Form, Input, Row, Col, Typography, Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-bojack.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const { Title, Text } = Typography;

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
  const decoded = jwtDecode(token);
  const onFinish = (event) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: event.title,
        entry: event.entry,
        mood: event.mood,
        profile: decoded.user_id,
      }),

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
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
        if (resJson.message) {
          setError(resJson.message);
          return;
        }
        navigate("/profile");
      });
  };

  return (
    <div
      className="site-layout-content"
      style={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Title>write.</Title>
      <Row type="flex" justify="center">
        <Col span={16}>
          <Form
            name="nest-messages"
            layout="vertical"
            onFinish={onFinish}
            style={{ backgroundColor: "#f5f5f5" }}
            initialValues={{
              mood: 0,
            }}
          >
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>
            <Form.Item name="entry" label="Entry">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="mood" label="Mood" rules={[{ required: true }]}>
              <Rate character={({ index }) => customIcons[index + 1]} />
            </Form.Item>
            <Text type="danger">{error ? error : <></>}</Text>
            <Form.Item>
              <br />
              <AwesomeButton
                type="secondary"
                size="medium"
                style={{ "--button-default-border-radius": "13px" }}
                htmlType="submit"
              >
                post
              </AwesomeButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewJournal;
