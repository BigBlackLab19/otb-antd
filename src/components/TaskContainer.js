import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import SetBlockTimeButton from "./SetBlockTimeButton";
import TimerInput from "./TimerInput";
import AddTaskButton from "./AddTaskButton";
import AddBreakButton from "./AddBreakButton";
import BreakOption from "./BreakOption";
import BreakDisplay from "./BreakDisplay";
import TaskDisplay from "./TaskDisplay";
import Task from "./Task";
import styled from "styled-components";
import last from "lodash.last";
import { v4 as uuid } from "uuid";

function TaskContainer(props) {
  const [changedTimeInput, setChangedTimeInput] = useState(false);
  const [showBreakButton, setShowBreakButton] = useState(false);
  const [changedAddBreakButton, setChangedAddBreakButton] = useState(false);
  const [minutesChange, setMinutesChange] = useState(25);
  const [titleChange, setTitleChange] = useState("");

  const [taskList, setTaskList] = useState([]); //submit for play button

  function handleChangedTimeInput() {
    setChangedTimeInput(true);
  }

  function handleChangedAddTaskButton() {
    setChangedAddBreakButton(true);
    const task = {
      id: uuid(),
      title: "",
      duration: "",
      type: "task",
      breakType: "",
    };
    setTaskList([...taskList, task]);
  }

  function handleChangedAddBreakButton() {
    const lastTask = last(taskList);
    const taskIndex = taskList.indexOf((task) => lastTask.id === task.id);
    const updatedTask = {
      ...lastTask,
      title: titleChange,
      duration: minutesChange,
      createdAt: new Date(),
    };
    taskList.splice(taskIndex, 1, updatedTask);
    console.log("updated", taskList);
    setTitleChange("");
    setMinutesChange(25);
    setShowBreakButton(true);
  }

  function handleTaskTitleChange(event) {
    setTitleChange(event.target.value);
  }

  function handleMinutesChange(event) {
    setMinutesChange(event);
  }

  function handleChangedBreakDisplay(breakType) {
    setShowBreakButton(false);
    setChangedAddBreakButton(false);
    const task = {
      id: uuid(),
      title: "",
      duration: "",
      type: "break",
      breakType,
    };
    setTaskList([...taskList, task]);
  }
  const list = taskList.map((task) =>
    task.type === "task" ? (
      <Task
        handleTaskTitleChange={handleTaskTitleChange}
        handleMinutesChange={handleMinutesChange}
        titleChange={titleChange}
        minutesChange={minutesChange}
        task={task}
      />
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

  // const taskDisplay = showBreakButton ? (
  //   <TaskDisplay titleChange={titleChange} minutesChange={minutesChange} />
  // ) : (
  //   <div />
  // );

  return (
    <>
      <ParentContainer>
        <CardContainer
          title={
            <Row>
              <Column span={12}>Schedule:</Column>
              <Column span={10}>{timeInput}</Column>
            </Row>
          }
          type="inner"
        >
          {list}
          {displayButton}
          {/* {taskDisplay} */}
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
