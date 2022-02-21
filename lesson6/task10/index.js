// input - arr
// output - arr

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    cloneArr.push(arr[i]);
  }
  return cloneArr;
}

const testArr = [1, 2, 3, 4];
console.log(cloneArr(testArr));
console.log(cloneArr(6));
