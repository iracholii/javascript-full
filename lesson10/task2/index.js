const arr = [
  NaN,
  '14',
  '  14text',
  undefined,
  '1.2558text',
  Infinity,
  1,
  1.2,
  2,
  8,
  8.25,
  -6,
  -5.5,
  -8.85,
];

const getParsedIntegers = arr => arr.map(element => Number.parseInt(element));

const getParsedIntegersV2 = arr => arr.map(element => parseInt(element));

function getParsedFloats(arr) {
  return arr.map(element => Number.parseFloat(element));
}

function getParsedFloatsV2(arr) {
  return arr.map(element => parseFloat(element));
}

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
