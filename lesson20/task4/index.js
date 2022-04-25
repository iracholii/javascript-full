/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

// algo
// 1. create constructor with price, city, type, dateCreated, isConfirmed and id
// 2. create checkPrice() - returns true if price > 1000
// 3. create confirmOrder() - changing isConfirmed status and adding new field dateConfirmed
// 4. create isValidType - returns true if type field is buy or sell

export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.id = Math.random().toString().slice(2, 10);
    // this.id = Math.random().toString(26).slice(2, 10);
  }

  // input: none
  // output: boolean
  checkPrice() {
    return this.price > 1000;
  }

  // input: none
  // output: undefined
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  // input: none
  // output: boolean
  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const order1 = new Order(250, 'Lviv', 'Sell');
console.log(order1);
console.log(order1.isValidType());
console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1);
console.log(order1.id);
