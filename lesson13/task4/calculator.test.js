import { it } from 'eslint/lib/rule-tester/rule-tester';
import { calc } from './calculator.js';

it('should add numbers', () => {
  const result = calc('6 + 5');
  expect(result).toEqual('6 + 5 = 11');
});

it('should subtract numbers', () => {
  const result = calc('6 - 5');
  expect(result).toEqual('6 - 5 = 1');
});

it('should divide numbers', () => {
  const result = calc('6 / 2');
  expect(result).toEqual('6 / 2 = 3');
});

it('should multiply numbers', () => {
  const result = calc('6 * 2');
  expect(result).toEqual('6 * 2 = 12');
});

it('should get null if input is not a string', () => {
  const result = calc(5);
  expect(result).toEqual(null);
});
