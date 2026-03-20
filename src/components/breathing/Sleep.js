import React, { useState } from "react";
import { Modal, Button, Typography, Space } from "antd";

const { Title, Text } = Typography;

const Sleep = () => {
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
        Proper Sleep
      </Button>
      <Modal
        title={<Title level={4} style={{ margin: 0 }}>Tips to Sleep Faster</Title>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleOk} type="primary" style={{ borderRadius: "6px", backgroundColor: "var(--primary)", border: "none" }}>
            Sweet Dreams
          </Button>
        ]}
        bodyStyle={{ padding: "24px" }}
      >
        <Space direction="vertical" size={12}>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            <li><Text>Relaxation from the face, to the shoulder, down to the legs and feet.</Text></li>
            <li><Text>Think of a relaxing scene, such as rocking in a boat.</Text></li>
            <li><Text>Warm shower before bed as body temperature dropping aids in sleeping.</Text></li>
            <li><Text>Blackout curtain and white noises.</Text></li>
            <li><Text>Avoid alcohol or caffeine which may affect your sleep.</Text></li>
            <li><Text>Exercise regularly, but not right before bed.</Text></li>
          </ul>
        </Space>
      </Modal>
    </>
  );
};

export default Sleep;
