export const sum = num => {
  if (num <= 0) {
    return null;
  }
  return num + sum(num - 1);
};

console.log(sum(4));
console.log(sum(10));
console.log(sum(7));
