import React, { useState } from "react";
import { Modal, Button } from "antd";

const Headspace = () => {
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
      <Button danger onClick={showModal}>
        Guided from Headspace
      </Button>
      <Modal
        title="Headspace | Mini meditation | Breathe"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <iframe
          width="470"
          height="280"
          src="https://www.youtube.com/embed/cEqZthCaMpo"
          title="Headspace | Mini meditation | Breathe"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
};

export default Headspace;
