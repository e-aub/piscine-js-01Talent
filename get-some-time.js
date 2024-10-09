function firstDayWeek(week, year) {
  let start = new Date(year);
  let current = new Date(start.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);
  if (week === 1) {
    return `01-01-${year}`
  }
  let dd = 0
  while (current.getDay() !== 1) {
    current.setDate(current.getDate() - 1);
  }
  return `${String(current.getDate()).padStart(2, '0')}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getFullYear()).padStart(4, '0')}`
}