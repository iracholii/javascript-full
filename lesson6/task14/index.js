// input - arr and number
// output - arr

const getSubArray = (arr, numberOfElements) => {
  const newArr = [];
  for (let index = 0; index < numberOfElements; index += 1) {
    newArr.push(arr[index]);
  }
  return newArr;
};

const testArr = [1, 5, 6, 8, 9, 10, 44, 55, 77];
console.log(getSubArray(testArr, 3));
