// input - string, number
// output - array

function splitString(string, length = 10) {
  if (typeof string !== 'string') {
    return null;
  }
  const arrOfStrings = [];
  for (let i = 0; i <= string.length; i += length) {
    const arrPart = string.substr(i, length);
    arrOfStrings.push(arrPart.concat('.'.repeat(length - arrPart.length)));
  }
  return arrOfStrings;
}

const test = 'NotethatasnumbersinJavaScriptare';
console.log(splitString(test));
console.log(splitString(555));
