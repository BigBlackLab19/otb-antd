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

const SECONDS_IN_MINUTES = 60;
function Timer(props) {
  const {
    changedAddBreakButton, currentTaskDuration, isRunning, showBreakButton,
  } = props;

  const [minutes, setMinutes] = useState(INITIAL_MINUTES);
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    if (seconds === 0) {
      if (minutes !== 0) {
        setSeconds(SECONDS_IN_MINUTES - 1);
      }
    } else if (seconds === (SECONDS_IN_MINUTES - 1)) {
      setMinutes(minutes - 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (!changedAddBreakButton && minutes === 0) {
      setMinutes(currentTaskDuration);
    }
    const myInterval = setInterval(() => {
      if (isRunning) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          setSeconds(SECONDS_IN_MINUTES - 1);
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
          <h1>
            00
            :
            00
          </h1>
        )
        : (
          <h1>
            {' '}
            {minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
    </div>
  );
}

export default Timer;
