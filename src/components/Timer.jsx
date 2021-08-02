import React, { useState } from 'react';
import styled from 'styled-components';

function Timer() {
  const [timerMinute, setTimerMinute] = useState(0);
  const [timerSecond, setTimerSecond] = useState(0);

  function Time(number) {
    if (number === 0) {
      return '00';
    }
    if (number < 0) {
      return `0${number}`;
    }

    return number;
  }

  return (
    <Clock>
      <span>{Time(timerMinute)}</span>
      <span>:</span>
      <span>{Time(timerSecond)}</span>
    </Clock>
  );
}

const Clock = styled.div`
  font-size: 5em;
  color: #16a3f8;
`;

export default Timer;
