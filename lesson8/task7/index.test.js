import { getAdults } from './index';

it('should get empty object if input is empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should get get adult users from object', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should not mutate object', () => {
  const obj = { Ann: 56, Andrey: 7 };
  const result = getAdults(obj);
  expect(obj).toEqual({ Ann: 56, Andrey: 7 });
});
