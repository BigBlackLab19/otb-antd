import React from "react";
import { Card, Row, Col, Button } from "antd";
import styled from "styled-components";

function BreakOption({ setChangedBreakDisplay }) {
  function handleOnClickShortBreak() {
    setChangedBreakDisplay("Short Break");
  }

  function handleOnClickLongBreak() {
    setChangedBreakDisplay("Long Break");
  }

  return (
    <ParentContainer>
      <CardContainer>
        <Row>
          <Column span={11}>
            <BreakButton block onClick={handleOnClickShortBreak}>
              Short Break
            </BreakButton>
          </Column>
          <Column span={2}>OR</Column>
          <Column span={11}>
            <BreakButton block onClick={handleOnClickLongBreak}>
              Long Break
            </BreakButton>
          </Column>
        </Row>
      </CardContainer>
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  padding-bottom: 0.5em;
`;

const CardContainer = styled(Card)`
  background-color: #b8e3fd;
  border: none;
`;

const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
`;

const BreakButton = styled(Button)`
  width: 100%;
  background-color: transparent;
  color: black;
  border-color: black;

  /* :hover {
    background-color: #73c8fb;
    color: black;
  }

  :focus {
    background-color: #73c8fb;
    color: black;
  } */
`;
export default BreakOption;
