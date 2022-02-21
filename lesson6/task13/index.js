// input - arr1, arr2, string, number
// output - number

// 1. iterate arr1 and find el with value === string --- not needed
// 2. find out index of that element
// 3. get the element with the same index from arr2 and minus number
// 4. return number

function withdraw(clients, balances, client, amount) {
  const balance = balances[clients.indexOf(client)];
  if (amount < balance) {
    return balance - amount;
  }
  return -1;
}

const clients = ['ant', 'bison', 'camel', 'duck', 'bison'];
const balances = [20, 50, 55, 40, 80];
console.log(withdraw(clients, balances, 'bison', 55));
