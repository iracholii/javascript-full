const arr = [
  NaN,
  '14',
  'text',
  undefined,
  'text' + 1,
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

function getFiniteNumbers(arr) {
  return arr.filter(number => Number.isFinite(number));
}

function getFiniteNumbersV2(arr) {
  return arr.filter(number => isFinite(number));
}

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
