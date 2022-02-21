const getAdults = obj => {
  return Object.entries(obj)
    .filter(element => element[1] >= 18)
    .map(el => el[0]);
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ Ann: 56, Andrey: 7 }));
