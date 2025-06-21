import React, { useState } from 'react';
import "./App.css"
import { Button, Modal } from 'antd';
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src="./Yamal.jpg" alt="" />
        <p>Lamine Yamal</p>
        <p>Date of Year:2007 years</p>
      </Modal>
    </>
  );
};
export default App;