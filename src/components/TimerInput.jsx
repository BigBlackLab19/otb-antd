import { TimePicker, Row, Col } from 'antd';
import React, { useState } from 'react';

import styled from 'styled-components';

import { getDisabledHours, getDisabledMinutes } from '../util/TimeUtil';
import getTotalTime from '../util/TotalTimeUtil';

function TimerInput(props) {
  const { handleGetTotalScheduleTime } = props;
  const format = 'HH:mm';
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  function handleStartTime(time) {
    setStartTime(time);
    handleGetTotalScheduleTime(getTotalTime(time, endTime));
  }

  function handleEndTime(time) {
    setEndTime(time);
    handleGetTotalScheduleTime(getTotalTime(startTime, time));
  }

  function disabledHours() {
    getDisabledHours(startTime);
  }

  function disabledMinutes(selectedHours) {
    getDisabledMinutes(startTime, selectedHours);
  }

  return (
    <Row>
      <Column span={11}>
        <TimePicker
          format={format}
          value={startTime}
          onChange={handleStartTime}
        />
      </Column>
      <Column span={2}>to</Column>
      <Column span={11}>
        <TimePicker
          disabledHours={disabledHours}
          disabledMinutes={disabledMinutes}
          format={format}
          value={endTime}
          onChange={handleEndTime}
        />
      </Column>
    </Row>
  );
}

export default TimerInput;

const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
