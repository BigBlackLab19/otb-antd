import { useState } from "react";
import Header from "./components/Header";
import TimerContainer from "./components/TimerContainer";
import PlayPauseButton from "./components/PlayPauseButton";
import TaskContainer from "./components/TaskContainer";
import InterruptModal from "./components/InterruptModal";


function App() {
  const [isOpenInterruptModal, setOpenInterruptModal] = useState(false);
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
      <PlayPauseButton toggle={toggleInterruptModal} />
      <TaskContainer />
    </>
  );
}

export default App;
