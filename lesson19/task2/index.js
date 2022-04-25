export function getOwnProps(obj) {
  const propsArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      propsArr.push(prop);
    }
  }
  return propsArr;
}

const testProto = {
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const test = {
  firstName: 'Kate',
  lastName: 'Doe',
  age: 58,
  getAge() {
    console.log(`${this.firstName} is ${this.age} years old`);
  },
};

Object.setPrototypeOf(test, testProto);

test.getFullName();
test.getAge();

console.log(getOwnProps(test));
