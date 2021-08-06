import { Card, Row, Col } from 'antd';
import React from 'react';

import styled from 'styled-components';

import Timer from './Timer';

function TimerContainer(props) {
  const {
    currentTitle,
    currentTaskDuration,
    isCurrentTaskDone,
    isRunning,
    changedAddBreakButton,
    setIsCurrentTaskDone,
    showBreakButton,
  } = props;

  return (
    <ParentContainer>
      <CardContainer>
        <Timer
          changedAddBreakButton={changedAddBreakButton}
          currentTaskDuration={currentTaskDuration}
          isCurrentTaskDone={isCurrentTaskDone}
          isRunning={isRunning}
          setIsCurrentTaskDone={setIsCurrentTaskDone}
          showBreakButton={showBreakButton}
        />
        <h1>
          Task:
          {' '}
          {currentTitle}
        </h1>
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
