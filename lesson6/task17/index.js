// input - arr
// output - number

// 1. iterate array
// 2. create new array with unique elements
// 3. count unique elem

function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let arrayUnique = [];
  let index = 0;
  for (let el of array) {
    if (!arrayUnique.includes(el)) {
      arrayUnique.push(el);
      index += 1;
    }
  }
  return index;
}

let testArr = [1, 1, 2, 3, 5, 5, 5];
console.log(uniqueCount(testArr));
