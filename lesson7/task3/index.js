// input - arr1
// output - arr2

// const flatArray = arr => {
//   const flatArr = arr.flat();
//   return flatArr.sort((a, b) => a - b);
// };

const flatArray = arr => {
  const flatArr = arr.slice();
  return flatArr.reduce((acc, elem) => acc.concat(elem), []).sort((a, b) => a - b);
};

const testArr = [9, 5, [1, 2, 8], 8, 9, [2, 0]];
console.log(flatArray(testArr));
console.log(testArr);
