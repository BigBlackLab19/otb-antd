import { ClockCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

function SetBlockTime(props) {
  const { setChangedTimeInput } = props;

  return (
    <SetTimerButton onClick={setChangedTimeInput}>
      Set Time
      {' '}
      <ClockCircleOutlined />
    </SetTimerButton>
  );
}

const SetTimerButton = styled(Button)`
  background-color: #eff0f4;
  color: #000;
`;

export default SetBlockTime;
