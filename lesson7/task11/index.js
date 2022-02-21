// input - arr, string
// output - arr

function filterNames(arr, text) {
  return arr.filter(element => {
    if (element.includes(text) && element.length > 5) {
      return element;
    }
  });
}

const test = ['Iranaa', 'Nattalie', 'Paula', 'Bobetta', 'Jane'];
console.log(filterNames(test, 'a'));
