import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const AddTaskButton = (props) => {
  return (
    <ParentContainer>
      <ButtonAddTask block onClick={props.setChangedAddTaskButton}>
        Add Task <PlusOutlined />
      </ButtonAddTask>
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  padding-bottom: 0.5em;
`;

const ButtonAddTask = styled(Button)`
  background-color: #b8e3fd;
  border-color: #b8e3fd;
  color: black;
  height: 64px;
  width: 100%;

  :hover {
    background-color: #73c8fb;
    color: black;
  }

  :focus {
    background-color: #73c8fb;
    color: black;
  }
`;

export default AddTaskButton;
