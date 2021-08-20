import { Form, Input, Row, Col, Typography, Rate, Spin } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-bojack.css";

import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const { Title, Text } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const JournalEdit = () => {
  const [obj, setObj] = useState();
  const [error, setError] = useState(null);
  const history = useHistory();

  const params = useParams();
  const url = `https://lepak.herokuapp.com/journals/${params.id}/`;

  const token = localStorage.token;
  const decoded = jwt_decode(token);
  //console.log(decoded);

  // ========== GET one journal ==========
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        //console.log(res);
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setObj(data);
      })
      .catch((err) => console.error({ Error: err }));
  }, [url, token]);

  // ========== onSubmit ==========
  const onFinish = (event) => {
    fetch(url, {
      method: "PUT",
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
          console.log(res);
          return res.json();
        }
        if (!res.ok) {
          return res.json();
        }
        console.log(res);
        throw new Error("Error in network");
      })
      .then((resJson) => {
        // console.log(typeof resJson.mood);
        if (typeof resJson.mood === "object") {
          setError("Please indicate your mood.");
          return;
        }
        if (resJson.id) {
          return history.push("/profile/");
        }
      });

    // history.push("/profile/")
    //console.log("Wheeeee you edited your journal entry fam");
  };

  return (
    <div
      className="site-layout-content"
      style={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Title>change the past.</Title>
      <Row type="flex" justify="center" style={{ backgroundColor: "#f5f5f5" }}>
        {obj ? (
          <Col span={16}>
            <Form
              name="nest-messages"
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                title: obj?.title,
                entry: obj?.entry,
                mood: obj?.mood,
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
                  edit
                </AwesomeButton>
              </Form.Item>
            </Form>
          </Col>
        ) : (
          <Spin size="large" />
        )}
      </Row>
    </div>
  );
};

export default JournalEdit;
