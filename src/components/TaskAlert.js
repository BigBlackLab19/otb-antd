import { Alert } from "antd";

function TaskAlert() {
  return (
    <>
      <Alert
        message="Cannot Add Anymore Tasks or Breaks"
        description="You cannot add anymore tasks or breaks as it will exceed the amount of time you scheduled for your block."
        type="info"
        showIcon
        closable
      />
    </>
  );
}

export default TaskAlert;
