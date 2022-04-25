// algo
// 1. create an array with length = number (argument)
// 2. create functions that return their index in created array
// 3. function createArrayOfFunctions should return array of functions, or null if argument is not a number, or empty array if argument is undefined

// input: number
// output: array
export function createArrayOfFunctions(number) {
  const arrayOfFunctions = [];
  if (Boolean(number) === false) {
    return arrayOfFunctions;
  }
  if (Number.isNaN(Number(number))) {
    return null;
  }
  for (let index = 0; index < number; index += 1) {
    // input: none
    // output: number
    arrayOfFunctions.push(function () {
      return index;
    });
  }
  return arrayOfFunctions;
}

const test1 = createArrayOfFunctions();
const test2 = createArrayOfFunctions('fgdg');
const test3 = createArrayOfFunctions(5)[1]();

console.log(test1);
console.log(test2);
console.log(test3);
