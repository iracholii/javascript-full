// declare the array starting with the first 2 values of the fibonacci sequence
// starting at array index 1, and push current index + previous index to the array

export const maxFibonacci = number => {
  function listFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 1; i < n; i += 1) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    }
    return fibonacci;
  }

  const fibonacciList = listFibonacci(50);

  const filteredList = fibonacciList.filter(el => el <= number);
  return filteredList[filteredList.length - 1];
};

console.log(maxFibonacci(50));
console.log(maxFibonacci(55));
console.log(maxFibonacci(300));
console.log(maxFibonacci(16));
console.log(maxFibonacci(14154556));
