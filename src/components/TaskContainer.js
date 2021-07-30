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
import TaskAlert from "./TaskAlert";
import styled from "styled-components";
import last from "lodash.last";
import { v4 as uuid } from "uuid";

function TaskContainer(props) {
  const [changedTimeInput, setChangedTimeInput] = useState(false);
  const [showBreakButton, setShowBreakButton] = useState(false);
  const [changedAddBreakButton, setChangedAddBreakButton] = useState(false);
  const [minutesChange, setMinutesChange] = useState(25);
  const [titleChange, setTitleChange] = useState("");
  const [totalTasksTime, setTotalTasksTime] = useState(0);
  const [totalScheduleTime, setTotalScheduleTime] = useState();
  const [isTaskAdded, setTaskAdded] = useState(false);
  const [taskList, setTaskList] = useState([]); //submit for play button
  const [isShortDisabled, setIsShortDisabled] = useState(false);
  const [isLongDisabled, setIsLongDisabled] = useState(false);

  console.log("Total Schedule Time is: ", totalScheduleTime);

  function deleteListItem() {
    setTotalTasksTime(totalTasksTime - taskList[taskList.length - 1].duration);

    const updatedList = taskList.filter((task, i) => taskList.length - 1 !== i);

    setTaskList(updatedList);
    setChangedAddBreakButton(false);
    setShowBreakButton(false);

    if (updatedList.length !== 0) {
      setTitleChange(taskList[updatedList.length - 1].title);
      setMinutesChange(taskList[updatedList.length - 1].duration);
    }

    if (updatedList.length !== 0) {
      if (
        taskList[updatedList.length - 1].title ===
        updatedList[updatedList.length - 1].title
      ) {
        setTaskAdded(true);
      }
    }
  }

  function handleGetTotalScheduleTime(minutes) {
    setTotalScheduleTime(minutes);
  }

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
      isLast: false,
    };
    setTaskList([...taskList, task]);
    setTitleChange("");
    setMinutesChange(25);
    setTaskAdded(false);
  }
  useEffect(() => {
    const remainingTime = totalScheduleTime - totalTasksTime;
    if (remainingTime < 5) {
      setIsShortDisabled(true);
    }
    if (remainingTime < 15) {
      setIsLongDisabled(true);
    }
  }, [totalTasksTime]);

  function handleChangedAddBreakButton() {
    const lastTask = last(taskList);
    const taskIndex = taskList.indexOf((task) => lastTask.id === task.id);
    const duration = parseInt(minutesChange);
    const updatedTask = {
      ...lastTask,
      title: titleChange,
      duration,
      createdAt: new Date(),
    };
    taskList.splice(taskIndex, 1, updatedTask);
    console.log("updated", taskList);
    setShowBreakButton(true);

    if (isTaskAdded === false) {
      setTotalTasksTime(totalTasksTime + duration);
    }
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

    const breakMinutes = breakType === "Short Break" ? 5 : 15;
    const task = {
      id: uuid(),
      title: breakType,
      duration: breakMinutes,
      type: "break",
      breakType,
      isLast: false,
    };
    setTaskList([...taskList, task]);

    setTotalTasksTime(totalTasksTime + breakMinutes);
  }

  const list = taskList.map((task, i) => {
    totalScheduleTime - totalTasksTime < 25
      ? (task.isLast = true)
      : console.log("this is i: " + i);
    console.log("list length: " + taskList.length);
    if (taskList.length - 1 === i) {
      task.isLast = true;
    } else {
      task.isLast = false;
    }
    console.log(task.isLast);

    return task.type === "task" ? (
      <Task
        handleOnDelete={deleteListItem}
        key={i}
        handleTaskTitleChange={handleTaskTitleChange}
        handleMinutesChange={handleMinutesChange}
        titleChange={titleChange}
        minutesChange={minutesChange}
        task={task}
        totalScheduleTime={totalScheduleTime}
        totalTasksTime={totalTasksTime}
      />
    ) : (
      <BreakDisplay task={task} handleOnDelete={deleteListItem} />
    );
  });
  const timeInput = changedTimeInput ? (
    <TimerInput handleGetTotalScheduleTime={handleGetTotalScheduleTime} />
  ) : (
    <SetBlockTimeButton setChangedTimeInput={handleChangedTimeInput} />
  );

  function addBreak() {
    return showBreakButton ? (
      <BreakOption
        setChangedBreakDisplay={handleChangedBreakDisplay}
        totalScheduleTime={totalScheduleTime}
        totalTasksTime={totalTasksTime}
        taskAlert={taskAlert()}
        isShortDisabled={isShortDisabled}
        isLongDisabled={isLongDisabled}
      />
    ) : (
      <AddBreakButton setChangedAddBreakButton={handleChangedAddBreakButton} />
    );
  }

  function displayButton() {
    if (taskList.length === 0) {
      if (totalScheduleTime < 25) {
        return taskAlert();
      }
      // if (totalScheduleTime - totalTasksTime < 25) {
      //   setShowBreakButton(false);
      //   return <taskAlert />;
      // }

      return (
        <AddTaskButton setChangedAddTaskButton={handleChangedAddTaskButton} />
      );
    }
    if (totalScheduleTime - totalTasksTime < 5) {
      return taskAlert();
    }

    if (last(taskList).type === "break") {
      if (totalScheduleTime - totalTasksTime < 25) {
        return taskAlert();
      }
      return (
        <AddTaskButton setChangedAddTaskButton={handleChangedAddTaskButton} />
      );
    }

    return addBreak();
  }

  function taskAlert() {
    console.log("alert");
    return <TaskAlert />;
  }

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
          {"totalTasksTime: " + totalTasksTime}
          {list}
          {displayButton()}

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
