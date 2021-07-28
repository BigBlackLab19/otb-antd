import React from "react";
import { Card, Row, Col, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import styled from "styled-components";

function BreakDisplay({ task, handleOnDelete }) {
  const { isLast, breakType } = task;
  const deleteButton = isLast && (
    <DeleteButton onClick={handleOnDelete}>
      <DeleteFilled />
    </DeleteButton>
  );

  const duration = breakType === "Short Break" ? "5 minutes" : "15 minutes";
  return (
    <ParentContainer>
      <CardContainer>
        <Row>
          <Column span={12}>{breakType}</Column>
          <SelectMinutesColumn span={10}>
            <breakOption />
            <MinutesLabel>{duration}</MinutesLabel>
          </SelectMinutesColumn>
          <Col>{deleteButton}</Col>
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

const DeleteButton = styled(Button)`
  border-color: black;
  color: black;
  background-color: transparent;
`;

export default BreakDisplay;
