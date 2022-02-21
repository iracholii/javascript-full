// input - array
// output - array

function reverseArray(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const reverseArr = [];
  for (let i = 0; i < array.length; i += 1) {
    reverseArr.unshift(array[i]);
  }
  return reverseArr;
}

const testArr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(testArr));
console.log(reverseArray('text'));
