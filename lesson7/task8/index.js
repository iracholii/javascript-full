function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr];
}

const arr = [1, 2, 3, 58, 8, 7];
console.log(cloneArr(arr));
