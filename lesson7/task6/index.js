function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

const test = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(test));
console.log(test);
