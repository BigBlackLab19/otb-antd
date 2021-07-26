import React from "react";
import { Card, Row, Col } from "antd";
import styled from "styled-components";

function TaskDisplay({ task }) {
  const { title, duration } = task;

  return (
    <ParentContainer>
      <CardContainer>
        <Row>
          <Column span={12}>{title}</Column>
          <SelectMinutesColumn span={12}>
            <breakOption />
            <MinutesLabel> {duration} minutes</MinutesLabel>
          </SelectMinutesColumn>
        </Row>
      </CardContainer>
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  padding-bottom: 0.5em;
`;

const CardContainer = styled(Card)`
  height: 64px;
  padding-top: 4px;
  background-color: #73c8fb;
  border: none;
`;

const Column = styled(Col)`
  padding-left: 0.2em;
  display: flex;
  justify-content: center;
`;

const SelectMinutesColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MinutesLabel = styled.span`
  padding-left: 0.5em;
`;

export default TaskDisplay;
