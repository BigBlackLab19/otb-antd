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

  function toggleInterruptModal() {
    setOpenInterruptModal(!isOpenInterruptModal);
  }

  return (
    <>
      <InterruptModal
        isOpen={isOpenInterruptModal}
        toggle={toggleInterruptModal}
      />
      <Header />
      <TimerContainer />
      <PlayPauseButton
        isPlayable={isPlayable}
        isPlayed={isPlayed}
        isRunning={isRunning}
        setIsPlayed={setIsPlayed}
        setIsRunning={setIsRunning}
        toggle={toggleInterruptModal}
      />
      <TaskContainer
        isPlayed={isPlayed}
        isRunning={isRunning}
        setIsPlayable={setIsPlayable}
        setIsRunning={setIsRunning}
        toggle={toggleInterruptModal}
      />
    </>
  );
}

export default App;
