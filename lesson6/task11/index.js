// input - arr
// output - boolean

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = Math.max(...arr) + Math.min(...arr);
  return sum > 1000;
}

const testArr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
console.log(checker(testArr));
