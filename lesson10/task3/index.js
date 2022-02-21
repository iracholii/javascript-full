/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = num => {
  const numbersArr = [];
  numbersArr.push(Math.floor(num * 100) / 100);
  numbersArr.push(Math.trunc(num * 100) / 100);
  numbersArr.push(Math.ceil(num * 100) / 100);
  numbersArr.push(Math.round(num * 100) / 100);
  numbersArr.push(Number(num.toFixed(2)));
  return numbersArr;
};

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
