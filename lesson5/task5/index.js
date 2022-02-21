function getSum(numberFirst, numberLast) {
  let result = 0;
  for (let num = numberFirst; num <= numberLast; num += 1) {
    if (num % 2 === 0) {
      result += num;
    }
  }
  return result;
}

console.log(getSum(1, 12));
