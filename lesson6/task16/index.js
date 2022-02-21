// input - arr1
// output - arr2

function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArray = [];
  for (let el of array) {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }
  return newArray;
}

const testArr = [1, 1, 2, 5, 5, 5, 2, 1, 1, 1, 4];
console.log(removeDuplicates(testArr));
