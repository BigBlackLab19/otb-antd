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
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentTask, setCurrentTask] = useState([]);

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
      <TimerContainer currentTitle={currentTitle} />
      <PlayPauseButton
        isPlayable={isPlayable}
        isPlayed={isPlayed}
        isRunning={isRunning}
        setIsPlayed={setIsPlayed}
        setIsRunning={setIsRunning}
        toggle={toggleInterruptModal}
      />
      <TaskContainer
        currentTitle={currentTitle}
        isPlayed={isPlayed}
        isRunning={isRunning}
        setCurrentTask={setCurrentTask}
        setCurrentTitle={setCurrentTitle}
        setIsPlayable={setIsPlayable}
        setIsRunning={setIsRunning}
        setTaskList={setTaskList}
        taskList={taskList}
        toggle={toggleInterruptModal}
      />
    </>
  );
}

export default App;
