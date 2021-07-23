import { useState } from "react";
import Header from "./components/Header";
import TimerContainer from "./components/TimerContainer";
import PlayPauseButton from "./components/PlayPauseButton";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <>
      <Header />
      <TimerContainer />
      <PlayPauseButton />
      <TaskContainer />
    </>
  );
}

export default App;
