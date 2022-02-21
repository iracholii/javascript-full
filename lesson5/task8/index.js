function findDivCount(a, b, n) {
  let result = 0;
  for (let num = a; num <= b; num += 1) {
    if (num % n === 0) {
      result += 1;
    }
  }
  return result;
}

console.log(findDivCount(1, 10, 3));
