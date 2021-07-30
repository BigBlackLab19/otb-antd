export function getDisabledHours(startTime) {
  if (!startTime) {
    return [];
  }

  const disabledHours = [];
  const startDate = new Date(startTime);
  for (let i = 0; i < startDate.getHours(); i += 1) {
    disabledHours.push(i);
  }

  return disabledHours;
}

export function getDisabledMinutes(startTime, selectedHours) {
  if (!startTime) {
    return [];
  }

  const disabledMinutes = [];
  const startDate = new Date(startTime);
  if (selectedHours === startDate.getHours()) {
    for (let i = 0; i <= startDate.getMinutes(); i += 1) {
      disabledMinutes.push(i);
    }
  }

  return disabledMinutes;
}
