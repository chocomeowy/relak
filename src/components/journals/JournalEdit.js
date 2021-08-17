import { Form, Input, Button, Row, Typography } from "antd";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

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

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item name="title" label="Title">
      <Input />
    </Form.Item>
  </Form>
);

const JournalEdit = () => {
  const [journal, setJournal] = useState([]);

  const params = useParams();
  console.log(params.id);
  const history = useHistory();
  const url = `https://lepak.herokuapp.com/journals/${params.id}/`;

  const token = localStorage.token;
  const decoded = jwt_decode(token);
  console.log(decoded);

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
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJournal([
          {
            title: data.title,
            entry: data.entry,
            mood: data.mood,
          },
        ]);
      })
      .catch((err) => console.error({ Error: err }));
  }, [params.id]);

  // ========== onChange ==========
  const handleChange = (allFields) => {
    //const origReview = e.target.value;
    //console.log(origReview);
    setJournal(allFields);
  };

  // ========== onSubmit ==========
  //   const onFinish = (event) => {
  //     fetch(url, {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         title: event.title,
  //         entry: event.entry,
  //         mood: event.rate,
  //         profile: decoded.user_id,
  //       }),

  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           console.log(res);
  //           return res.json();
  //         }
  //         throw new Error("Error in network");
  //       })
  //       .then((resJson) => {
  //         console.log(resJson);
  //         if (resJson.error) {
  //           return;
  //         } else {
  //           //console.log(resJson);

  //           return;
  //         }
  //       });

  //     console.log("Wheeeee you edited your journal entry fam");
  //   };

  return (
    <div
      className="site-layout-content"
      style={{
        textAlign: "center",
      }}
    >
      <Title>change the past.</Title>
      <Row type="flex" justify="center">
        <CustomizedForm
          fields={journal}
          onChange={(newFields) => {
            setJournal(newFields);
          }}
        />
        <Form
          name="global-state"
          //   onFinish={onFinish}
          fields={journal}
          onFieldsChange={(_, allFields) => {
            handleChange(allFields);
          }}
          //   validateMessages={validateMessages}
        >
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>
          <Form.Item name="entry" label="Entry">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="mood" label="Mood" rules={[{ required: true }]}>
            <Rate
              defaultValue={5}
              initialValues={5}
              character={({ index }) => customIcons[index + 1]}
            />
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

export default JournalEdit;
