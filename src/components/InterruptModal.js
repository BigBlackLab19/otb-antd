import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

const InterruptModal = (props) => {
  const { isOpen, toggle }  = props;
  const [form] = Form.useForm();
 

  return (
    <Modal title="Paused" visible={isOpen} onCancel={toggle} onOk={toggle}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="reason"
          label="Reason for Pausing"
          rules={[
            {
              required: true,
              message: "Please input the reason for pausing.",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InterruptModal;
