// input - arr
// output - number

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b) / arr.length;
}

const test = [1, 2, 3, 4, 5];
console.log(arrAverage(test));
