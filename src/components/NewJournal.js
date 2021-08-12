import { Form, Input, InputNumber, Button } from "antd";

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
  const onSubmit = () => {
    console.log("Wheeeee you got a new journal entry fam");
  };

  return (
    <div className="site-layout-content">
      <Form
        name="nest-messages"
        onSubmit={onSubmit}
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
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewJournal;
