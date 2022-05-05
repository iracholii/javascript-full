// currying

export const mult = num1 => num2 => {
  return num1 * num2;
};

export const twice = num => {
  return mult(2)(num);
};

export const triple = num => {
  return mult(3)(num);
};

console.log(mult(5)(4));
console.log(twice(2));
console.log(triple(2));
