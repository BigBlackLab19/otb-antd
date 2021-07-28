import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const InterruptModal = (props) => {
  const { isOpen, toggle } = props;
  const [reasoning, setReasoning] = useState("");

  function handleChangeReasoning(e) {
    setReasoning(e.target.value);
  }

  return (
    <Modal
      title="Current Task: {taskTitle} (Paused)"
      visible={isOpen}
      closable={false}
      footer={null}
    >
      <TextArea
        onChange={handleChangeReasoning}
        placeholder="You paused the timer. Tell us what happened."
      />
      <SubmitButtonContainer>
        <Button type="primary" onClick={toggle} disabled={!reasoning}>
          Submit
        </Button>
      </SubmitButtonContainer>
    </Modal>
  );
};

export default InterruptModal;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5em;
`;
