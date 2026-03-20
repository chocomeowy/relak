import React, { useState } from "react";
import { Modal, Button, Typography } from "antd";

const { Title } = Typography;

const Headspace = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Button 
        type="default" 
        danger 
        onClick={showModal}
        style={{ borderRadius: "8px", height: "40px" }}
      >
        Guided from Headspace
      </Button>
      <Modal
        title={<Title level={4} style={{ margin: 0 }}>Guided Meditation</Title>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={520}
        footer={null}
        bodyStyle={{ padding: "20px" }}
        centered
      >
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/cEqZthCaMpo"
            title="Headspace | Mini meditation | Breathe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default Headspace;
