/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  let indicator = 0;
  for (let element of arr) {
    if (element === num) {
      indicator += 1;
    }
  }
  return indicator > 0;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
