let result = 0;

// input: number
// output: undefined
export function add(number) {
  result += number;
}

// input: number
// output: undefined
export function decrease(number) {
  result -= number;
}

// input: none
// output: undefined
export function reset() {
  result = 0;
}

// input: none
// output: number
export function getMemo() {
  return result;
}

add(5);
console.log(getMemo());
decrease(2);
console.log(getMemo());
reset();
console.log(getMemo());
