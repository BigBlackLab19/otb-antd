import React from "react";
import Timer from "./Timer";
import { Card } from "antd";
import styled from "styled-components";

function TimerContainer() {
  return (
    <ParentContainer>
      <CardContainer>
        <Timer />
        <h1>Task: </h1>
      </CardContainer>
    </ParentContainer>
  );
}

export default TimerContainer;

const ParentContainer = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled(Card)`
  width: 80%;
  background-color: #f7f8fc;
  display: flex;
  justify-content: center;
`;
