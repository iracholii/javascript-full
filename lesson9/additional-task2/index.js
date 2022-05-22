/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// algo
// 1. iterate keysList array
// 2. add key-value to the obj

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     // console.log(`acc: ${acc}; key: ${key}; index: ${index}`);
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => {
    return { ...acc, [key]: valuesList[index] };
  }, {});
}

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});
// }

// if code doesn`t work - split by steps

// test data

const keysArr = ['product', 'color', 'price'];
const valuesArr = ['Notebook', 'White', '200'];
const result = buildObject(keysArr, valuesArr);

console.log(result);
