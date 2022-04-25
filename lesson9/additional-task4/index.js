// input - object
// output - array

// algo
// 1. get values of an object
// 2. add id to each element of array
// 3. sort by age

// V1
// const getCustomersList = obj => {
//   const objCopy = JSON.parse(JSON.stringify(obj));
//   const customersArr = Object.values(objCopy);

//   for (let i = 0; i < customersArr.length; i += 1) {
//     customersArr[i].id = Object.keys(objCopy)[i];
//   }
//   return customersArr.sort((a, b) => a.age - b.age);
// };

// V2
const getCustomersList = obj => {
  // const objCopy = JSON.parse(JSON.stringify(obj));
  const objCopy = structuredClone(obj);
  const customersArr = Object.values(objCopy).map((el, index) => {
    // eslint-disable-next-line no-param-reassign
    el.id = Object.keys(objCopy)[index];
    return el;
  });
  console.log(obj);
  return customersArr.sort((a, b) => a.age - b.age);
};

// example

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Kate',
    age: 25,
  },
};

console.log(getCustomersList(customers));
