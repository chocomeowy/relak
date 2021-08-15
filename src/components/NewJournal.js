import { Form, Input, Button, Row, Typography } from "antd";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
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
  const onFinish = () => {
    console.log("Wheeeee you got a new journal entry fam");
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
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="journalEntry"
            label="Entry"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item >
          <Rate
            defaultValue={5}
            character={({ index }) => customIcons[index + 1]}
          />

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
