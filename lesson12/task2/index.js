// input - string
// output - string

const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.split('').reverse().join('');
};

let test = 'some text';
console.log(reverseString(test));
