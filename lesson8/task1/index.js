const transformToObject = arr => {
  const object = {};
  arr.forEach(element => {
    object[element] = element;
  });
  return object;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
