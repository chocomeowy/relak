import { Form, Input, Button, Row, Typography } from "antd";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
const { Title } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const NewJournal = () => {
  const history = useHistory();
  const url = "https://lepak.herokuapp.com/journals/";
  const token = localStorage.token;
  const decoded = jwt_decode(token);
  //console.log(decoded);
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
          console.log(res);
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

          return;
        }
      });

    console.log("Wheeeee you got a new journal entry fam");
    history.push("/profile");
  };

  return (
    <div
      className="site-layout-content"
      style={{
        textAlign: "center",
      }}
    >
      <Title>write.</Title>
      <Row type="flex" justify="center">
        <Form
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
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

          <Form.Item>
            <br />
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default NewJournal;
