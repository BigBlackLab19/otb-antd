import { Alert } from 'antd';
import { React } from 'react';

function ScheduleAlert() {
  return (
    <Alert
      closable
      showIcon
      description="You cannot add tasks or breaks until you have set a schedule for your block."
      message="Schedule Has Not Been Set"
      type="info"
    />
  );
}

export default ScheduleAlert;
