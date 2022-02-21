let result = 0;
for (let index = 0; index <= 1000; index += 1) {
  if (index % 2 !== 0) {
    console.log('Found');
    result += index;
  }
}
if (result * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
