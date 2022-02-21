import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get null if array is empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get null if input is not array', () => {
  const result = getMinSquaredNumber('text');
  expect(result).toEqual(null);
});

it('should get min number of array squared', () => {
  const result = getMinSquaredNumber([2, -3, 5]);
  expect(result).toEqual(4);
});
