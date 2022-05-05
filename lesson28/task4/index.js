export const compose =
  (...functions) =>
  value => {
    return functions.reduce((acc, func) => func(acc), value);
  };

const add2 = value => value + 2;
const square = value => value * value;
const mult10 = value => value * 10;

const composedFunction = compose(add2, square, mult10);
console.log(composedFunction(2)); // => 160
