// input - string, number
// output - string

function splitText(text, amount = 10) {
  if (!(typeof text === 'string')) {
    return null;
  }
  const piecesArr = [];
  for (let i = 0; i <= text.length; i += amount) {
    const newString = text.substr(i, amount);
    piecesArr.push(newString[0].toUpperCase() + newString.slice(1));
  }
  return piecesArr.join('\n');
}

const test = 'NotethatasnumbersinJavaScriptareIEEE754floatingpointnumbers';
const number = 15485;
console.log(splitText(test, 3));
console.log(splitText([1, 2, 5]));
