import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import SetBlockTimeButton from "./SetBlockTimeButton";
import TimerInput from "./TimerInput";
import AddTaskButton from "./AddTaskButton";
import AddBreakButton from "./AddBreakButton";
import BreakOption from "./BreakOption";
import BreakDisplay from "./BreakDisplay";
import Task from "./Task";
import styled from "styled-components";

function TaskContainer(props) {
  const [changedTimeInput, setChangedTimeInput] = useState(false);
  const [showBreakButton, setShowBreakButton] = useState(false);
  const [changedAddBreakButton, setChangedAddBreakButton] = useState(false);

  const [taskList, setTaskList] = useState([]); //submit for play button

  function handleChangedTimeInput() {
    setChangedTimeInput(true);
  }

  function handleChangedAddTaskButton() {
    setChangedAddBreakButton(true);
    const task = {
      title: "",
      duration: "",
      type: "task",
      breakType: "",
    };
    setTaskList([...taskList, task]);
  }

  function handleChangedAddBreakButton() {
    setShowBreakButton(true);
  }

  function handleChangedBreakDisplay(breakType) {
    setShowBreakButton(false);
    setChangedAddBreakButton(false);
    const task = {
      title: "",
      duration: "",
      type: "break",
      breakType,
    };
    setTaskList([...taskList, task]);
  }
  const list = taskList.map((task) =>
    task.type === "task" ? (
      <Task />
    ) : (
      <BreakDisplay breakType={task.breakType} />
    )
  );

  const timeInput = changedTimeInput ? (
    <TimerInput />
  ) : (
    <SetBlockTimeButton setChangedTimeInput={handleChangedTimeInput} />
  );

  const addBreak = showBreakButton ? (
    <BreakOption setChangedBreakDisplay={handleChangedBreakDisplay} />
  ) : (
    <AddBreakButton setChangedAddBreakButton={handleChangedAddBreakButton} />
  );

  const displayButton = changedAddBreakButton ? (
    addBreak
  ) : (
    <AddTaskButton setChangedAddTaskButton={handleChangedAddTaskButton} />
  );

  return (
    <>
      <ParentContainer>
        <CardContainer
          title={
            <Row>
              <Column span={12}>Schedule:</Column>
              <Column span={12}>{timeInput}</Column>
            </Row>
          }
          type="inner"
        >
          {list}
          {displayButton}
        </CardContainer>
      </ParentContainer>
    </>
  );
}

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;

const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled(Card)`
  /* background-color: #f7f8fc; */
  width: 80%;
`;

export default TaskContainer;
