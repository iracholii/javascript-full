import { it } from 'eslint/lib/rule-tester/rule-tester';
import { reverseArray } from './index.js';

it('should reverse array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('should get null if input is not array', () => {
  const result = reverseArray('text');
  expect(result).toEqual(null);
});
