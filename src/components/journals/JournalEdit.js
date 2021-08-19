import { Form, Input, Button, Row, Typography, Rate, Spin } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const { Title } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const JournalEdit = () => {
  const [obj, setObj] = useState();
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
    }).then((res) => {
      if (res.ok) {
        //console.log(res);
        return res.json();
      }
      throw new Error("Error in network");
    });

    console.log("Wheeeee you edited your journal entry fam");
    history.push("/profile/");
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
          <Form
            name="nest-messages"
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

            <Form.Item>
              <br />
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Spin size="large" />
        )}
      </Row>
    </div>
  );
};

export default JournalEdit;
