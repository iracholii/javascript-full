/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  if (Array.isArray(arr)) {
    let sumOfElements = 0;
    for (const element of arr) {
      sumOfElements += element;
    }
    return sumOfElements;
  }
  return null;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
