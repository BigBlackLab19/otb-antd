import React, { useState } from "react";
import { Button } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const PlayButton = (props) => {
  return (
    <ParentContainer>
      <PlayPauseBtn onClick={props.onClick}>
        <PlayIcon />
      </PlayPauseBtn>
    </ParentContainer>
  );
};

const PauseButton = (props) => {
  return (
    <ParentContainer>
      <PlayPauseBtn onClick={props.onClick}>
        <PauseIcon />
      </PlayPauseBtn>
    </ParentContainer>
  );
};

function PlayPauseButton(props) {
  const [isRunning, setIsRunning] = useState(false);

  function handlePlayClick() {
    setIsRunning(true);
  }

  function handlePauseClick() {
    setIsRunning(false);
    props.toggle();
  }

  const buttonDisplay = isRunning ? (
    <PauseButton onClick={handlePauseClick} />
  ) : (
    <PlayButton onClick={handlePlayClick} />
  );

  return (
    <div>
      <const isRunning={isRunning} />
      {buttonDisplay}
    </div>
  );
}

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;

const PlayPauseBtn = styled(Button)`
  background-color: #16a3f8;
  width: 80px;
  height: 80px;
  padding-top: 0.5em;
  border-radius: 50%;
  border: none;

  :hover {
    background-color: #0687d5;
  }

  :focus {
    background-color: #0687d5;
  }
`;

const PlayIcon = styled(PlayCircleOutlined)`
  font-size: 3.2em;
  color: white;
`;

const PauseIcon = styled(PauseCircleOutlined)`
  font-size: 3.2em;
  color: white;
`;

export default PlayPauseButton;
