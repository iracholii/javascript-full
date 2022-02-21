import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredArray([2, 3, 4]);
  expect(result).toEqual([4, 9, 16]);
});

it('should keep only odd numbers', () => {
  const result = getOddNumbers([2, 3, 4, 5, 6]);
  expect(result).toEqual([3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(2, 2);
  expect(result).toEqual(4);
});
