/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

function buildObject(keysList, valuesList) {
  const result = {};
  for (let i = 0; i < keysList.length; i += 1) {
    result[keysList[i]] = valuesList[i];
  }
  return result;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
console.log(buildObject(keys, values)); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
