import { Alert } from 'antd';
import { React } from 'react';

function TaskAlert() {
  return (
    <Alert
      closable
      showIcon
      description="You cannot add anymore tasks or breaks as it will exceed the amount of time you scheduled for your block."
      message="Cannot Add Anymore Tasks or Breaks"
      type="info"
    />
  );
}

export default TaskAlert;
