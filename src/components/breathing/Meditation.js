import React, { useState } from "react";
import { Modal, Button, Typography, Space } from "antd";

const { Title, Text } = Typography;

const Meditation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Button 
        type="primary" 
        onClick={showModal}
        style={{ borderRadius: "8px", height: "40px", backgroundColor: "var(--primary)", border: "none" }}
      >
        Mindfulness
      </Button>
      <Modal
        title={<Title level={4} style={{ margin: 0 }}>Mindfulness Habits</Title>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleOk} type="primary" style={{ borderRadius: "6px", backgroundColor: "var(--primary)", border: "none" }}>
            Got it
          </Button>
        ]}
        bodyStyle={{ padding: "24px" }}
      >
        <Space direction="vertical" size={12}>
          <Text secondary>Habits to stay in the present moment:</Text>
          <ol style={{ paddingLeft: "20px", margin: 0 }}>
            <li><Text>Controlled breathing</Text></li>
            <li><Text>Journalling</Text></li>
            <li><Text>Meditation - Be at ease with yourself</Text></li>
            <li><Text>Time in Nature - Moving around helps</Text></li>
            <li><Text>Contribute/Create</Text></li>
            <li><Text>Gratefulness</Text></li>
            <li><Text>Proper Rest</Text></li>
          </ol>
        </Space>
      </Modal>
    </>
  );
};

export default Meditation;
