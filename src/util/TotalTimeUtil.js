export default function getTotalTime(startTime, endTime) {
  if (!startTime || !endTime) {
    return 0;
  }
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const startDateHours = startDate.getHours();
  const startDateMinutes = startDate.getMinutes();
  const totalStartDateMinutes = startDateHours * 60 + startDateMinutes;

  const endDateHours = endDate.getHours();
  const endDateMinutes = endDate.getMinutes();
  const totalEndDateMinutes = endDateHours * 60 + endDateMinutes;

  return totalEndDateMinutes - totalStartDateMinutes;
}
