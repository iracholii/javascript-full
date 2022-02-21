const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

const copyObj = obj => ({ ...obj });

console.log(copyObj(obj));
