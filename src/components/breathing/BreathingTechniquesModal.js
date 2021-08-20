import React, { useState } from "react";
import { Modal, Button } from "antd";

const BreathingTechniquesModal = () => {
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
        Why Breathing?
      </Button>
      <Modal
        title="To breathe well is to fuel your body with oxygen and clear a foggy mind. "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>
            Sama Vritti or “Equal Breathing”. Balance can do a body good,
            beginning with the breath. To start, inhale for a count of four,
            then exhale for a count of four — all through the nose, which adds a
            natural resistance to the breath.
          </li>
          <li>
            Box breathing, also known as square breathing, is a technique used
            when taking slow, deep breaths. It can heighten performance and
            concentration while also being a powerful stress reliever. It’s also
            called four-square breathing. -
            <a
              href="https://www.healthline.com/health/box-breathing"
              target="_blank"
              rel="noreferrer"
            >
              https://www.healthline.com/health/box-breathing
            </a>
          </li>
          <li>
            The 4-7-8 breathing technique is based on pranayama breathing
            exercises. Pranayama is the ancient yogic practice of controlling
            your breath. These types of mindful breathing exercises have been
            shown to have many benefits for stress reduction and relaxation. -
            <a
              href="https://www.webmd.com/balance/what-to-know-4-7-8-breathing"
              target="_blank"
              rel="noreferrer"
            >
              https://www.webmd.com/balance/what-to-know-4-7-8-breathing
            </a>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default BreathingTechniquesModal;
