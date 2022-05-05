// input: date
// output: obj

export const shmoment = initialDateValue => {
  const newDate = new Date(initialDateValue);

  const calc = {
    add(type, time) {
      if (type === 'milliseconds') {
        newDate.setMilliseconds(newDate.getMilliseconds() + time);
      }
      if (type === 'seconds') {
        newDate.setSeconds(newDate.getSeconds() + time);
      }
      if (type === 'minutes') {
        newDate.setMinutes(newDate.getMinutes() + time);
      }
      if (type === 'hours') {
        newDate.setHours(newDate.getHours() + time);
      }
      if (type === 'days') {
        newDate.setDate(newDate.getDate() + time);
      }
      if (type === 'months') {
        newDate.setMonth(newDate.getMonth() + time);
      }
      if (type === 'years') {
        newDate.setFullYear(newDate.getFullYear() + time);
      }
      return this;
    },

    subtract(type, time) {
      if (type === 'milliseconds') {
        newDate.setMilliseconds(newDate.getMilliseconds() - time);
      }
      if (type === 'seconds') {
        newDate.setSeconds(newDate.getSeconds() - time);
      }
      if (type === 'minutes') {
        newDate.setMinutes(newDate.getMinutes() - time);
      }
      if (type === 'hours') {
        newDate.setHours(newDate.getHours() - time);
      }
      if (type === 'days') {
        newDate.setDate(newDate.getDate() - time);
      }
      if (type === 'months') {
        newDate.setMonth(newDate.getMonth() - time);
      }
      if (type === 'years') {
        newDate.setFullYear(newDate.getFullYear() - time);
      }
      return this;
    },

    result() {
      return newDate;
    },
  };

  return calc;
};

const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();
console.log(res);
// res => ... Jan 15 2019 17:19:17 ...

const res2 = shmoment(new Date(2020, 0, 7, 17, 17, 17)).subtract('years', 1).result();
console.log(res2);

const res3 = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .subtract('years', 1)
  .add('months', 2)
  .result();
console.log(res3);
