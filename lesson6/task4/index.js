/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [firstElement, ...newArray] = numbers;
  newArray.push(firstElement);
  return newArray;
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const newArray = [];
  for (let index = 1; index < numbers.length; index += 1) {
    newArray.push(numbers[index]);
  }
  newArray.push(numbers[0]);
  return newArray;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
