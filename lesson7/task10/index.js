function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b);
}

const test = [0, 2, 3, 2];
console.log(sum(test));
