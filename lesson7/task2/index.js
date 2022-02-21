// input - arr1
// output - arr2

function sortDesc(array) {
  const arraySorted = array.slice();
  return arraySorted.sort((a, b) => b - a);
}

const testArr = [7, 9, 9, 2, 3, 1, 2, 5, 6, 12];
console.log(sortDesc(testArr));
console.log(testArr);
