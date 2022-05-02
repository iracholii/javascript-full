// export const getDiff = (startDate, endDate) => {
//   let differenceInSeconds = new Date(startDate - endDate).getTime() / 1000;
//   if (differenceInSeconds < 0) {
//     differenceInSeconds *= -1;
//   }

//   const seconds = differenceInSeconds % 60;
//   const minutes = ((differenceInSeconds - seconds) / 60) % 60;
//   const hours = ((differenceInSeconds - seconds - minutes * 60) / 3600) % 24;
//   const days = (differenceInSeconds - seconds - minutes * 60 - hours * 3600) / 3600 / 24;

//   return `${days}d ${hours}h ${minutes}m ${Math.floor(seconds)}s`;
// };

// export const getDiff2 = (startDate, endDate) => {
//   const start = Date.UTC(
//     startDate.getFullYear(),
//     startDate.getMonth(),
//     startDate.getDate(),
//     startDate.getHours(),
//     startDate.getMinutes(),
//     startDate.getSeconds(),
//   );
//   const end = Date.UTC(
//     endDate.getFullYear(),
//     endDate.getMonth(),
//     endDate.getDate(),
//     endDate.getHours(),
//     endDate.getMinutes(),
//     endDate.getSeconds(),
//   );

//   let differenceInSeconds = new Date(start - end) / 1000;
//   if (differenceInSeconds < 0) {
//     differenceInSeconds *= -1;
//   }

//   const seconds = differenceInSeconds % 60;
//   const minutes = ((differenceInSeconds - seconds) / 60) % 60;
//   const hours = ((differenceInSeconds - seconds - minutes * 60) / 3600) % 24;
//   const days = (differenceInSeconds - seconds - minutes * 60 - hours * 3600) / 3600 / 24;

//   return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// };

export const getDiff3 = (startDate, endDate) => {
  let differenceInSeconds = new Date(startDate - endDate).getTime() / 1000;
  if (differenceInSeconds < 0) {
    differenceInSeconds *= -1;
  }

  const seconds = differenceInSeconds % 60;
  const minutes = (differenceInSeconds / 60) % 60;
  const hours = (differenceInSeconds / 3600) % 24;
  const days = differenceInSeconds / 3600 / 24;

  return `${Math.floor(days)}d ${Math.floor(hours)}h ${Math.floor(minutes)}m ${Math.floor(
    seconds,
  )}s`;
};

/// test data

// const date1 = new Date();
// const date2 = new Date(2021, 8, 21, 10, 52, 10);

// console.log(getDiff(date1, date2));
// console.log(getDiff2(date1, date2));
