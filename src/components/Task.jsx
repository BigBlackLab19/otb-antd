/* eslint-disable no-magic-numbers */
import {
  Card, Row, Col, Input, Select,
} from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

import TaskDisplay from './TaskDisplay';

const { Option } = Select;

function Task(props) {
  const {
    currentTitle,
    handleMinutesChange,
    handleOnDelete,
    handleTaskTitleChange,
    isRunning,
    isPlayed,
    minutesChange,
    setIsPlayed,
    task,
    taskList,
    titleChange,
    totalScheduleTime,
    totalTasksTime,
  } = props;

  const [changeBackgroundClick, setChangeBackgroundClick] = useState(false);
  const timeValues = [25, 30, 35, 45, 50, 60, 75, 90];
  function handleCheck() {
    if ((!isRunning) && (currentTitle === task.title) && changeBackgroundClick) { return '#f8cbad'; }
    if ((isRunning) && (currentTitle === task.title)) {
      setChangeBackgroundClick(true);

      return '#16a3f8';
    }

    return '#73c8fb';
  }

  const timeOptionsDisplay = timeValues.map((value) => {
    if (totalScheduleTime > value) {
      if (totalScheduleTime - totalTasksTime > value) {
        return <Option value={value}>{value}</Option>;
      }
    }

    return null;
  });

  if (task.createdAt) {
    return (
      <TaskDisplay
        currentTitle={currentTitle}
        handleCheck={handleCheck}
        handleOnDelete={handleOnDelete}
        isPlayed={isPlayed}
        isRunning={isRunning}
        setIsPlayed={setIsPlayed}
        task={task}
        taskList={taskList}
      />
    );
  }

  return (
    <ParentContainer>
      <CardContainer handleCheck={handleCheck()}>
        <RowContainer>
          <Col span={10}>
            <Input
              placeholder="Task Title"
              value={titleChange}
              onChange={handleTaskTitleChange}
            />
          </Col>
          <SelectMinutesColumn span={12}>
            <Select
              defaultValue="25"
              value={minutesChange}
              onChange={handleMinutesChange}
            >
              {timeOptionsDisplay}
            </Select>
            <MinutesLabel>minutes</MinutesLabel>
          </SelectMinutesColumn>
        </RowContainer>
      </CardContainer>
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  padding-bottom: 0.5em;
`;

const CardContainer = styled(Card)`
  
  background-color:${(props) => (props.handleCheck)};
  border: none;
`;

const RowContainer = styled(Row)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SelectMinutesColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MinutesLabel = styled.span`
  padding-left: 0.5em;
`;

export default Task;
