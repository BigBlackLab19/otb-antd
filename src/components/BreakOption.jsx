import {
  Button, Card, Col, Row,
} from 'antd';
import { React } from 'react';
import styled from 'styled-components';

import { SHORT_BREAK, LONG_BREAK } from '../constants/common';

function BreakOption(props) {
  const {
    setChangedBreakDisplay,
    isShortDisabled,
    isLongDisabled,
  } = props;

  function handleOnClickShortBreak() {
    setChangedBreakDisplay(SHORT_BREAK);
  }

  function handleOnClickLongBreak() {
    setChangedBreakDisplay(LONG_BREAK);
  }

  return (
    <ParentContainer>
      <CardContainer>
        <Row>
          <Column span={11}>
            <BreakButton
              block
              disabled={isShortDisabled}
              onClick={handleOnClickShortBreak}
            >
              Short Break
            </BreakButton>
          </Column>
          <Column span={2}>OR</Column>
          <Column span={11}>
            <BreakButton
              block
              disabled={isLongDisabled}
              onClick={handleOnClickLongBreak}
            >
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
`;

const BreakButton = styled(Button)`
  width: 100%;
  background-color: transparent;
  color: #000;
  border-color: #000;
`;

export default BreakOption;
