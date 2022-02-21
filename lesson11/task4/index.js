// input - string, string
// output - number

const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }
  let count = 0;
  let textArr = text.split(' ');
  textArr.forEach(text => {
    if (text.includes(str)) {
      count += 1;
    }
  });

  return count;
};

// const countOccurrences = (text = '', str) => {
//   if (str === '') {
//     return null;
//   }
//   let count = 0;
//   const textArr = text.split('');
//   textArr.forEach(text => {
//     if (text.includes(str)) {
//       count += 1;
//     }
//   });
//   return count;
// };

const test = 'Notet hatata snum bersinJatavaScri ptareI EEE754floati ngpotaintnumbers';
const test2 =
  'Creates a new object with the specified prototype object and properties. Adds the named property described by a given descriptor to an object.';
console.log(countOccurrences(test, 'n'));
console.log(countOccurrences(test2, 'object'));
// console.log(''.length);
// console.log(' '.length);
