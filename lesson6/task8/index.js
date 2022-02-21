/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultArr = [];
  for (let el of arr) {
    if (el % 2 === 0) {
      resultArr.push(el + delta);
    } else if (el % 2 !== 0) {
      resultArr.push(el);
    }
  }
  return resultArr;
  console.log(arr);
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
