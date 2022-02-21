/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let arrSum = 0;
  for (let el of arr) {
    arrSum += el;
  }
  return arrSum > 100;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
