/* eslint-disable no-restricted-syntax */

// const { resetDefaultConfig } = require('eslint/lib/rule-tester/rule-tester');

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  const result = {};
  for (let key in obj) {
    for (let el of props) {
      if (key === el) {
        result[key] = obj[key];
      }
    }
  }
  return result;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
