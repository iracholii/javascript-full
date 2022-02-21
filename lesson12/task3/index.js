// input - arr
// output - arr

function cleanTransactionsList(transactionsArr) {
  const transactionsCopy = [...transactionsArr];
  return transactionsCopy
    .filter(element => {
      return !isNaN(Number(element));
    })
    .map(element => {
      return '$' + Number(element).toFixed(2);
    });
}

const test = [2, 5.555, '5.2222', '   25', ' 8.25  ', ' 1 text', ' 36.5', 'text'];

console.log(cleanTransactionsList(test));
console.log(test);
