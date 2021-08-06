/* eslint-disable no-magic-numbers */
import { Statistic } from 'antd';
import { min, size } from 'lodash';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  DEFAULT_TASK_MINUTES,
  INITIAL_MINUTES,
  INITIAL_SECONDS,
} from '../constants/common';

const SECONDS_IN_MINUTES = 2;
function Timer(props) {
  const {
    changedAddBreakButton, currentTaskDuration, isCurrentTaskDone, isRunning, showBreakButton, setIsCurrentTaskDone,
  } = props;

  const [minutes, setMinutes] = useState(INITIAL_MINUTES);
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (seconds === -1) {
      if (minutes !== 0) {
        setSeconds(SECONDS_IN_MINUTES - 1);
      }
    } else if (seconds === (SECONDS_IN_MINUTES - 1)) {
      setMinutes(minutes - 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (!changedAddBreakButton && minutes === 0 && !isStarted) {
      console.log('changedadd', isStarted);
      setMinutes(currentTaskDuration);
    } else if (minutes !== 0 && !isStarted) {
      setIsStarted(true);
    }
    const myInterval = setInterval(() => {
      if (isRunning) {
        if (seconds === 1 && minutes === 0 && isStarted) {
          setIsCurrentTaskDone(true);
        }
        if (!isCurrentTaskDone) {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          } else {
            setSeconds(SECONDS_IN_MINUTES - 1);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [changedAddBreakButton, minutes, seconds, isRunning]);

  return (
    <div>
      { minutes === 0 && seconds === 0
        ? (
          <Clock>
            00:00
          </Clock>
        )
        : (
          <Clock>
            {' '}
            {minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
          </Clock>
        )}
    </div>
  );
}

export default Timer;

const Clock = styled.h1`
  font-size: 5em;
  color: #16a3f8;
`;
