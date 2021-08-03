import { Card, Row, Col } from 'antd';
import { head } from 'lodash';
import last from 'lodash.last';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import {
  LONG_BREAK_MINUTES,
  SHORT_BREAK_MINUTES,
  SHORT_BREAK,
  TASK_TYPES,
  DEFAULT_TASK_MINUTES,
} from '../constants/common';

import AddBreakButton from './AddBreakButton';
import AddTaskButton from './AddTaskButton';
import BreakDisplay from './BreakDisplay';
import BreakOption from './BreakOption';
import ScheduleAlert from './ScheduleAlert';
import SetBlockTimeButton from './SetBlockTimeButton';
import Task from './Task';
import TaskAlert from './TaskAlert';
import TimerInput from './TimerInput';

function TaskContainer(props) {
  const {
    setIsPlayable, isRunning, isPlayed, taskList, setTaskList, setHeadTitle,
  } = props;
  const [changedTimeInput, setChangedTimeInput] = useState(false);
  const [showBreakButton, setShowBreakButton] = useState(false);
  const [changedAddBreakButton, setChangedAddBreakButton] = useState(false);
  const [minutesChange, setMinutesChange] = useState(DEFAULT_TASK_MINUTES);
  const [titleChange, setTitleChange] = useState('');
  const [totalTasksTime, setTotalTasksTime] = useState(0);
  const [totalScheduleTime, setTotalScheduleTime] = useState(0);
  const [isTaskAdded, setTaskAdded] = useState(false);
  const [isShortDisabled, setIsShortDisabled] = useState(false);
  const [isLongDisabled, setIsLongDisabled] = useState(false);

  useEffect(() => {
    const remainingTime = totalScheduleTime - totalTasksTime;

    if (remainingTime < SHORT_BREAK_MINUTES) {
      setIsShortDisabled(true);
    } else {
      setIsShortDisabled(false);
    }
    if (remainingTime < LONG_BREAK_MINUTES) {
      setIsLongDisabled(true);
    } else {
      setIsLongDisabled(false);
    }
  }, [totalTasksTime]);

  function deleteListItem() {
    setIsPlayable(false);
    const currentTask = last(taskList);
    const newTotalTasksTime = totalTasksTime - currentTask.duration;
    setTotalTasksTime(newTotalTasksTime);

    const updatedList = taskList.filter((task) => task.id !== currentTask.id);

    setTaskList(updatedList ?? []);
    setChangedAddBreakButton(false);
    setShowBreakButton(false);

    if (updatedList.length) {
      const lastUpdatedTask = last(updatedList);

      setTitleChange(lastUpdatedTask.title ?? '');
      setMinutesChange(lastUpdatedTask.duration ?? 0);
      setTaskAdded(true);
    } else { setHeadTitle(''); }
  }

  function handleGetTotalScheduleTime(minutes) {
    setTotalScheduleTime(minutes);
  }

  function handleChangedTimeInput() {
    setChangedTimeInput(true);
  }

  function handleChangedAddTaskButton() {
    const task = {
      breakType: '',
      duration: '',
      id: uuid(),
      title: '',
      type: TASK_TYPES.TASK,
    };

    setChangedAddBreakButton(true);
    setTaskList([...taskList, task]);
    setTitleChange('');
    setMinutesChange(DEFAULT_TASK_MINUTES);
    setTaskAdded(false);
  }

  function handleChangedAddBreakButton() {
    const lastTask = last(taskList);
    const taskIndex = taskList.indexOf((task) => lastTask.id === task.id);
    const duration = parseInt(minutesChange, 10);
    const updatedTask = {
      ...lastTask,
      createdAt: new Date(),
      duration,
      title: titleChange,
    };
    taskList.splice(taskIndex, 1, updatedTask);
    setShowBreakButton(true);

    if (!isTaskAdded) {
      setTotalTasksTime(totalTasksTime + duration);
    }
  }

  function handleTaskTitleChange(event) {
    setTitleChange(event.target.value);
  }

  function handleMinutesChange(event) {
    setMinutesChange(event);
  }

  function handleChangedBreakDisplay(breakType) {
    setShowBreakButton(false);
    setChangedAddBreakButton(false);

    const breakMinutes = breakType === SHORT_BREAK ? SHORT_BREAK_MINUTES : LONG_BREAK_MINUTES;
    const task = {
      breakType,
      duration: breakMinutes,
      id: uuid(),
      title: breakType,
      type: TASK_TYPES.BREAK,
    };
    setTaskList([...taskList, task]);

    setTotalTasksTime(totalTasksTime + breakMinutes);
  }

  const list = taskList?.map((task) => (task.type === TASK_TYPES.TASK ? (
    <Task
      key={task}
      handleMinutesChange={handleMinutesChange}
      handleOnDelete={deleteListItem}
      handleTaskTitleChange={handleTaskTitleChange}
      isPlayed={isPlayed}
      isRunning={isRunning}
      minutesChange={minutesChange}
      task={task}
      taskList={taskList}
      titleChange={titleChange}
      totalScheduleTime={totalScheduleTime}
      totalTasksTime={totalTasksTime}
    />
  ) : (
    <BreakDisplay
      key={task}
      handleOnDelete={deleteListItem}
      isPlayed={isPlayed}
      task={task}
      taskList={taskList}
    />
  )));

  const timeInput = changedTimeInput ? (
    <TimerInput handleGetTotalScheduleTime={handleGetTotalScheduleTime} />
  ) : (
    <SetBlockTimeButton setChangedTimeInput={handleChangedTimeInput} />
  );

  function addBreak() {
    return showBreakButton ? (
      <BreakOption
        isLongDisabled={isLongDisabled}
        isShortDisabled={isShortDisabled}
        setChangedBreakDisplay={handleChangedBreakDisplay}
        taskAlert={<TaskAlert />}
        totalScheduleTime={totalScheduleTime}
        totalTasksTime={totalTasksTime}
      />
    ) : (
      <AddBreakButton setChangedAddBreakButton={handleChangedAddBreakButton} />
    );
  }

  function displayButton() {
    if (totalScheduleTime - totalTasksTime === 0 && taskList.length === 0) {
      return <ScheduleAlert />;
    }

    if (!taskList.length) {
      if (totalScheduleTime < DEFAULT_TASK_MINUTES) {
        if (isRunning) {
          return <></>;
        }

        return <TaskAlert />;
      }

      return (
        <AddTaskButton setChangedAddTaskButton={handleChangedAddTaskButton} />
      );
    }
    if (totalScheduleTime - totalTasksTime < SHORT_BREAK_MINUTES) {
      if (isRunning) {
        return <></>;
      }
      setIsPlayable(true);

      return <TaskAlert />;
    }

    if (last(taskList).type === TASK_TYPES.BREAK) {
      setHeadTitle(head(taskList).title);
      if (isRunning) {
        return <></>;
      }
      if (totalScheduleTime - totalTasksTime < DEFAULT_TASK_MINUTES) {
        setIsPlayable(true);

        return <TaskAlert />;
      }

      return (
        <AddTaskButton setChangedAddTaskButton={handleChangedAddTaskButton} />
      );
    }

    return addBreak();
  }

  return (
    <ParentContainer>
      <CardContainer
        title={(
          <Row>
            <Column span={12}>Schedule:</Column>
            <Column span={10}>{timeInput}</Column>
          </Row>
        )}
        type="inner"
      >
        {`totalTasksTime: ${totalTasksTime}`}
        {list}
        {displayButton()}
      </CardContainer>
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;

const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled(Card)`
  width: 80%;
`;

export default TaskContainer;
