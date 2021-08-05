/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';

import Header from './components/Header';
import InterruptModal from './components/InterruptModal';
import PlayPauseButton from './components/PlayPauseButton';
import TaskContainer from './components/TaskContainer';
import TimerContainer from './components/TimerContainer';

function App() {
  const [isOpenInterruptModal, setOpenInterruptModal] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [taskList, setTaskList] = useState([]); // submit for play button
  const [changedAddBreakButton, setChangedAddBreakButton] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentTask, setCurrentTask] = useState([]);
  const [currentTaskDuration, setCurrentTaskDuration] = useState(0);
  const [seconds, setSeconds] = React.useState(10);
  const [showBreakButton, setShowBreakButton] = useState(false);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM!');
    }
  });

  function toggleInterruptModal() {
    setOpenInterruptModal(!isOpenInterruptModal);
  }

  return (
    <>
      <InterruptModal
        currentTitle={currentTitle}
        isOpen={isOpenInterruptModal}
        toggle={toggleInterruptModal}
      />
      <Header />
      <TimerContainer
        changedAddBreakButton={changedAddBreakButton}
        currentTaskDuration={currentTaskDuration}
        currentTitle={currentTitle}
        isRunning={isRunning}
        showBreakButton={showBreakButton}
      />
      <PlayPauseButton
        isPlayable={isPlayable}
        isPlayed={isPlayed}
        isRunning={isRunning}
        setIsPlayed={setIsPlayed}
        setIsRunning={setIsRunning}
        toggle={toggleInterruptModal}
      />
      <TaskContainer
        changedAddBreakButton={changedAddBreakButton}
        currentTitle={currentTitle}
        isPlayed={isPlayed}
        isRunning={isRunning}
        setChangedAddBreakButton={setChangedAddBreakButton}
        setCurrentTask={setCurrentTask}
        setCurrentTaskDuration={setCurrentTaskDuration}
        setCurrentTitle={setCurrentTitle}
        setIsPlayable={setIsPlayable}
        setIsRunning={setIsRunning}
        setShowBreakButton={setShowBreakButton}
        setTaskList={setTaskList}
        showBreakButton={showBreakButton}
        taskList={taskList}
        toggle={toggleInterruptModal}
      />
    </>
  );
}

export default App;
