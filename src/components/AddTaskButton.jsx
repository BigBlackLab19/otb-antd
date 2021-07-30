import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

function AddTaskButton(props) {
  const { setChangedAddTaskButton } = props;

  return (
    <ParentContainer>
      <ButtonAddTask block onClick={setChangedAddTaskButton}>
        Add Task
        {' '}
        <PlusOutlined />
      </ButtonAddTask>
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  padding-bottom: 0.5em;
`;

const ButtonAddTask = styled(Button)`
  background-color: #b8e3fd;
  border-color: #b8e3fd;
  color: #000;
  height: 64px;
  width: 100%;

  :hover {
    background-color: #73c8fb;
    color: #000;
  }

  :focus {
    background-color: #73c8fb;
    color: #000;
  }
`;

export default AddTaskButton;
