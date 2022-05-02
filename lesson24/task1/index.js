export const dayOfWeek = (date, days) => {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const dayCurrent = new Date(date).getDate();
  const dateNew = new Date(date).setDate(dayCurrent + days);
  return weekDays[new Date(dateNew).getDay()];
};

const date = new Date(2022, 3, 28);
console.log(dayOfWeek(date, 2));
