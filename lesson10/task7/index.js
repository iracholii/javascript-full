/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const numbersArr = [];
  numbersArr.push(Math.floor(num * 10 ** prec) / 10 ** prec);
  numbersArr.push(Math.trunc(num * 10 ** prec) / 10 ** prec);
  numbersArr.push(Math.ceil(num * 10 ** prec) / 10 ** prec);
  numbersArr.push(Math.round(num * 10 ** prec) / 10 ** prec);
  numbersArr.push(Number(num.toFixed(prec)));
  return numbersArr;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
