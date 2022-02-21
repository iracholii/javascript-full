// input - obj
// output - arr

const getPeople = obj => {
  return Object.values(obj)
    .flat()
    .map(key => key.name);
};

const testObj = {
  room1: [{ name: 'a' }, { name: 'b' }, { name: 'g' }, { name: 'j' }],
  room2: [{ name: 'p' }, { name: 'o' }, { name: 'i' }, { name: 'u' }],
  room3: [{ name: 'r' }, { name: 'e' }, { name: 'w' }, { name: 'q' }],
};

console.log(getPeople(testObj));
