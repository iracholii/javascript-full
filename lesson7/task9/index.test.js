import { withdraw } from './index.js';

it('should get -1 if balance < amount', () => {
  const result = withdraw(['Kate', 'Jake', 'Tom'], [800, 300, -500], 'Jake', 500);
  expect(result).toEqual(-1);
});

it('should get user balance if balance > amount', () => {
  const result = withdraw(['Kate', 'Jake', 'Tom'], [800, 300, -500], 'Kate', 500);
  expect(result).toEqual(300);
});

it('should not change user balance if balance < amount', () => {
  const clients = ['Kate', 'Jake', 'Tom'];
  const balances = [800, 300, -500];
  const result = withdraw(clients, balances, 'Kate', 900);
  expect(balances).toEqual([800, 300, -500]);
});
