export function getDisabledHours(startTime) {
  if (!startTime) {
    return;
  }

  const disabledHours = [];
  const startDate = new Date(startTime);
  for (let i = 0; i < startDate.getHours(); i++) {
    disabledHours.push(i);
  }
  console.log("Disabled Hours: " + disabledHours);
  return disabledHours;
}

export function getDisabledMinutes(startTime, selectedHours) {
  if (!startTime) {
    return;
  }

  const disabledMinutes = [];
  const startDate = new Date(startTime);
  if (selectedHours === startDate.getHours()) {
    for (let i = 0; i <= startDate.getMinutes(); i++) {
      disabledMinutes.push(i);
    }
  }
  console.log("Disabled Minutes: " + disabledMinutes);
  return disabledMinutes;
}
