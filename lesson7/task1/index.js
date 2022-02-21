// input - arr1
// output - arr2

function getSpecialNumbers(array) {
  return array.filter(number => number % 3 === 0);
}

const testArr = [1, 2, 5, 6, 7, 9, 9, 2, 3, 12];
console.log(getSpecialNumbers(testArr));
