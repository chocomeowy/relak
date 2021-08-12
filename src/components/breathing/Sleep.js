import React, { useState } from "react";
import { Modal, Button } from "antd";

const Sleep = () => {
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
        Proper Sleep
      </Button>
      <Modal
        title="Tips to sleep faster"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>
            Relaxation from the face, to the shoulder, down to the legs and
            feet.
          </li>
          <li>Think of a relaxing scene, such as rocking in a boat.</li>
          <li>
            Warm shower before bed as body temperature dropping aids in
            sleeping.
          </li>
          <li>Blackout curtain and white noises.</li>
          <li>Avoid alcohol or caffeine which may affect your sleep.</li>
          <li>Exercise</li>
        </ul>
      </Modal>
    </>
  );
};

export default Sleep;
