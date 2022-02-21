const start = 5;
const end = 10;
let result = 0;

for (let index = start; index <= end; index += 1) {
  if (index % 5 === 0) {
    console.log(index);
  } else if (index % 2 === 0 && index % 4 !== 0) {
    result += index;
  } else if (index % 3 === 0) {
    result -= index;
  } else if (index % 4 === 0) {
    result *= index;
  }
}
