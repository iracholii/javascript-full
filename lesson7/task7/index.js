// imput - arr, number
// output - arr

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(element => {
    if (element % 2 === 0) {
      return element + delta;
    }
    if (element % 2 !== 0) {
      return element;
    }
  });
}

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6], 10));
