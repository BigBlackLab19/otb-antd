import React, { useState } from "react";
import { TimePicker, Row, Col } from "antd";
import { getDisabledHours, getDisabledMinutes } from "../util/TimeUtil";
import { getTotalTime } from "../util/TotalTimeUtil";
import styled from "styled-components";
// import moment from "moment";

function TimerInput({ handleGetTotalScheduleTime }) {
  const format = "HH:mm";
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  function handleStartTime(time) {
    setStartTime(time);
    console.log("Start Time: " + time);
    handleGetTotalScheduleTime(getTotalTime(time, endTime));
  }

  function handleEndTime(time) {
    setEndTime(time);
    console.log("End Time: " + time);
    handleGetTotalScheduleTime(getTotalTime(startTime, time));
  }

  return (
    <>
      <Row>
        <Column span={11}>
          <TimePicker
            value={startTime}
            format={format}
            onChange={handleStartTime}
          />
        </Column>
        <Column span={2}>to</Column>
        <Column span={11}>
          <TimePicker
            value={endTime}
            format={format}
            onChange={handleEndTime}
            disabledHours={() => getDisabledHours(startTime)}
            disabledMinutes={(selectedHours) =>
              getDisabledMinutes(startTime, selectedHours)
            }
          />
        </Column>
      </Row>
    </>
  );
}

export default TimerInput;

const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
