import React, { useState } from "react";
import { Card, Row, Col, Input, Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

function Task() {
  const [titleChange, setTitleChange] = useState("");
  //   const [minutesChange, setMinutesChange] = useState("");

  function handleTaskTitleChange(event) {
    setTitleChange(event.target.value);
    console.log("taskTitle: " + event.target.value);
  }

  //   function handleMinutesChange(event) {
  //     setMinutesChange(event.target.value);
  //     console.log("minutes: " + minutesChange);
  //   }

  return (
    <ParentContainer>
      <CardContainer>
        <RowContainer>
          <Col span={12}>
            <Input
              placeholder="Task Title"
              value={titleChange}
              onChange={handleTaskTitleChange}
            />
          </Col>
          <SelectMinutesColumn span={12}>
            <span>
              <Select defaultValue="25">
                <Option value="25">25</Option>
                <Option value="30">30</Option>
                <Option value="35">35</Option>
                <Option value="45">45</Option>
                <Option value="60">60</Option>
                <Option value="75">75</Option>
                <Option value="90">90</Option>
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
