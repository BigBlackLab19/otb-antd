import { Statistic } from 'antd';
import { size } from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';

import {
  DEFAULT_TASK_MINUTES,
} from '../constants/common';

function Timer(props) {
  const { currentTaskDuration } = props;
  const [timerMinute, setTimerMinute] = useState(0);
  const [timerSecond, setTimerSecond] = useState(0);
  const { Countdown } = Statistic;
  const targetTime = Date.now() + 1000 * 60 * currentTaskDuration;

  function timeFormat() {
    if (currentTaskDuration < 60) { 
      return 'mm:ss';
    }

    return 'HH:mm:ss';
  } 

  return (
    <Countdown format={timeFormat()} value={targetTime} valueStyle={{ color: '#16a3f8', fontSize: '5em' }} />
  );
}

export default Timer;
