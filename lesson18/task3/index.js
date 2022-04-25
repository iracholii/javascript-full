export function sumOfSquares() {
  return [...arguments].map(el => el * el).reduce((acc, el) => acc + el);
}

console.log(sumOfSquares(2, 2, 1));
