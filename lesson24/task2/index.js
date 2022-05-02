export const getGreenwichTime = date => {
  const settings = {
    timeZone: 'UTC',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat('en', settings).format(date);
};

console.log(getGreenwichTime(new Date()));
