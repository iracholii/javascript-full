/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// input: obj, string, any
// output: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // input: obj1, obj2 ...
  // output: obj1
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const product = {
  name: 'Laptop',
};

const res = addPropertyV4(product, 'price', 250);
console.log(res);
console.log(addPropertyV4(res, 'color', 'white'));
console.log(product);

// rest operator

function sum(...args) {
  console.log(args);
}
sum(1, 2);

// examples
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

console.log(transaction);
