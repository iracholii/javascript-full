// input - arr
// output - arr

function squareArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.map(number => number * number);
}

const test = [1, 2, 2, 5, 5];
console.log(squareArray(test));
