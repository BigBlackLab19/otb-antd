import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

function PlayPauseButton({ toggle }) {
  const [isRunning, setIsRunning] = useState(false);

  function handlePlayClick() {
    setIsRunning(true);
  }

  function handlePauseClick() {
    setIsRunning(false);
    toggle();
  }
  const icon = isRunning ? <PauseIcon /> : <PlayIcon />;
  const handler = isRunning ? handlePauseClick : handlePlayClick;

  return (
    <ParentContainer>
      <PlayPauseBtn onClick={handler}>
        {icon}
      </PlayPauseBtn>
    </ParentContainer>
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
  color: #FFF;
`;

const PauseIcon = styled(PauseCircleOutlined)`
  font-size: 3.2em;
  color: #FFF;
`;

export default PlayPauseButton;
