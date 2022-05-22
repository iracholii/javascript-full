// input object, object
// output boolean

// function compareObjects(obj1, obj2) {
//   console.log(JSON.stringify(obj1));
//   return JSON.stringify(obj1) == JSON.stringify(obj2);
// }

// algo
// 1. get keys, get values
// 2. check keys length
// 3.1 compare every key/value with .every method
// 3.2 compare key/value with .some method if some is not equal - false

// 1 - bad

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   let result = 0;
//   for (let i = 0; i < keys1.length; i += 1) {
//     if (keys1[i] === keys2[i]) {
//       result += 1;
//     }
//   }
//   return result === obj1.length;
// }

// 2 - bad

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return keys1.every((el, index) => {
//     return el === keys2[index] && values1[index] === values2[index];
//   });
// }

// 3 - good

function compareObjects(obj1, obj2) {
  const keys = Object.keys(obj1);

  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }

  return keys.every(key => obj1[key] === obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
