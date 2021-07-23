import React from "react";
import { Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

function SetBlockTime(props) {
  return (
    <div>
      <SetTimerButton onClick={() => props.setChangedTimeInput()}>
        Set Time <ClockCircleOutlined />
      </SetTimerButton>
    </div>
  );
}

const SetTimerButton = styled(Button)`
  background-color: #eff0f4;
  color: black;
`;

export default SetBlockTime;
