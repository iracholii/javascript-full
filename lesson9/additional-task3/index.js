// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   let result = 0;
//   for (let i = 0; i < obj1.length; i += 1) {
//     if (Object.is(obj1[i], obj2[i])) {
//       result += 1;
//     }
//   }
//   return result === obj1.length;
// }

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const values1 = Object.values(obj1);
  const values2 = Object.values(obj2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < keys1.length; i += 1) {
    if (keys1[i] === keys2[i]) {
      result += 1;
    }
  }
  return result === obj1.length;
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
