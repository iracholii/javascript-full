// input - arr
// output - number

const getTotalPrice = arr => {
  return '$' + Math.floor(arr.reduce((a, b) => a + b) * 100) / 100;
};

const test = [12, 12.258, 1.758, 5.8698];

console.log(getTotalPrice(test));
