const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  const randomArr = [];
  for (let i = 1; i <= length; i += 1) {
    randomArr.push(Math.round(Math.random() * (to - from) + from));
  }
  return randomArr;
};

// const getRandomNumbers = (length, from, to) => {
//   if (to - from < 1) {
//     return null;
//   }
//   const randomArr = [];
//   randomArr.length = length;
//   randomArr.forEach(el => (randomArr[el] = Math.round(Math.random() * (to - from) + from)));
//   return randomArr;
// };

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 1)); // ==> null
