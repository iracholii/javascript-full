const m = 5;
const n = 8;
let result = 1;
for (let index = m; index <= n; index += 1) {
  if (index % 2 !== 0) {
    result *= index;
  }
}
console.log(result);
