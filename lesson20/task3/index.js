export class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount1) {
    this.#balance += amount1;
  }

  withdraw(amount2) {
    if (amount2 > this.#balance) {
      console.log(`No enough funds`);
      return;
    }
    this.#balance -= amount2;
  }
}

const wallet1 = new Wallet();
console.log(wallet1);
wallet1.deposit(25);
console.log(wallet1.getBalance());
wallet1.withdraw(15);
console.log(wallet1.getBalance());
wallet1.withdraw(25);
console.log(wallet1.getBalance());
// console.log(wallet1.#balance);
