import React, { useState } from "react";
import { Modal, Button } from "antd";

const Meditation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Mindfulness
      </Button>
      <Modal
        title="Mindfulness habits to be in the present moment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ol>
          <li>Controlled breathing</li>
          <li>Journalling</li>
          <li>Meditation - Be at ease with yourself</li>
          <li>Time in Nature - Moving around helps</li>
          <li>Contribute/Create</li>
          <li>Gratefulness</li>
          <li>Proper Rest</li>
        </ol>
      </Modal>
    </>
  );
};

export default Meditation;
