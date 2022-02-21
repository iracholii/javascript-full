// input - arr
// - output - number

const getTotalRevenue = transactions => {
  return transactions.map(user => user.amount).reduce((a, b) => a + b);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
