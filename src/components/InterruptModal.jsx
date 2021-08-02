import {
  Button, Modal, Input,
} from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const { TextArea } = Input;

function InterruptModal(props) {
  const { isOpen, toggle } = props;
  const [reasoning, setReasoning] = useState('');

  function handleChangeReasoning(e) {
    setReasoning(e.target.value);
  }

  return (
    <Modal
      closable={false}
      footer={null}
      title="Current Task: {taskTitle} (Paused)"
      visible={isOpen}
    >
      <TextArea
        placeholder="You paused the timer. Tell us what happened."
        onChange={handleChangeReasoning}
      />
      <SubmitButtonContainer>
        <Button disabled={!reasoning} type="primary" onClick={toggle}>
          Submit
        </Button>
      </SubmitButtonContainer>
    </Modal>
  );
}

export default InterruptModal;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5em;
`;
