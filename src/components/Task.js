import React, { useState, useEffect } from "react";
import { Card, Row, Col, Input, Select } from "antd";

import styled from "styled-components";
import TaskDisplay from "./TaskDisplay";

const { Option } = Select;

function Task({
  task,
  titleChange,
  minutesChange,
  handleMinutesChange,
  handleTaskTitleChange,
  handleOnDelete,
  isTimeValid,
  totalScheduleTime,
  totalTasksTime,
}) {
  const { createdAt } = task;

  const timeValues = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
  ];

  const timeOptionsDisplay = timeValues.map((value) => {
    if (totalScheduleTime > value) {
      if (totalScheduleTime - totalTasksTime > value) {
        return <Option value={value}>{value}</Option>;
      }
    }
    return <></>;
  });
  if (createdAt) {
    return <TaskDisplay task={task} handleOnDelete={handleOnDelete} />;
  }

  return (
    <ParentContainer>
      <CardContainer>
        <RowContainer>
          <Col span={10}>
            <Input
              placeholder="Task Title"
              value={titleChange}
              onChange={handleTaskTitleChange}
            />
          </Col>
          <SelectMinutesColumn span={12}>
            <span>
              <Select
                defaultValue="25"
                value={minutesChange}
                onChange={handleMinutesChange}
              >
                {timeOptionsDisplay}
              </Select>
            </span>
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
  background-color: #73c8fb;
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
