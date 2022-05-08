export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then(numbers =>
      numbers
        .filter(value => !isNaN(value))
        .reduce((acc, number) => {
          acc += Number(number);
          return acc;
        }, 0),
    )
    .catch(() => Promise.reject(new Error("Can't calculate")));

// test data

const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(10, 1000);
const asyncNum2 = getValueWithDelay('25', 2000);
const asyncNum3 = getValueWithDelay(undefined, 3000);
const asyncNum4 = getValueWithDelay(74, 2000);

asyncSum(asyncNum1, asyncNum2, asyncNum3, asyncNum4).then(result => {
  console.log(result);
});
