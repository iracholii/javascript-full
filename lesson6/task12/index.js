// input - arr
// output - sorted arr

// Проход каждому элементу
// Проводим элемент по массиву
// Если элемент больше следующего
// То флипаем его (меняем местами)

function sortAsc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let el = 0; el < arr.length; el += 1) {
      if (arr[el] > arr[el + 1]) {
        [arr[el], arr[el + 1]] = [arr[el + 1], arr[el]];
      }
    }
  }
  return arr;
}

const testArr = [8, 6, 4, 2, 3];
console.log(sortAsc(testArr));

function sortDesc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let el = 0; el < arr.length; el += 1) {
      if (arr[el] < arr[el + 1]) {
        [arr[el], arr[el + 1]] = [arr[el + 1], arr[el]];
      }
    }
  }
  return arr;
}

console.log(sortDesc(testArr));
