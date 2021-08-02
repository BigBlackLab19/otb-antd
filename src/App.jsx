import React, { useState } from 'react';

import Header from './components/Header';
import InterruptModal from './components/InterruptModal';
import PlayPauseButton from './components/PlayPauseButton';
import TaskContainer from './components/TaskContainer';
import TimerContainer from './components/TimerContainer';

function App() {
  const [isOpenInterruptModal, setOpenInterruptModal] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);

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
      <PlayPauseButton isPlayable={isPlayable} toggle={toggleInterruptModal} />
      <TaskContainer setIsPlayable={setIsPlayable} />
    </>
  );
}

export default App;
