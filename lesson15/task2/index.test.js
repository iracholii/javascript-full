import { createCalculator } from './index';

it('should add number to result', () => {
  const calc = createCalculator();
  calc.add(5);
  const result = calc.getMemo();
  expect(result).toEqual(5);
});

it('should substract number from result', () => {
  const calc = createCalculator();
  calc.decrease(5);
  const result = calc.getMemo();
  expect(result).toEqual(-5);
});

it('should reset result', () => {
  const calc = createCalculator();
  calc.decrease(5);
  calc.add(8);
  calc.reset();
  const result = calc.getMemo();
  expect(result).toEqual(0);
});
