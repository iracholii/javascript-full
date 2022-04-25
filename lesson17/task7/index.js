export const user = {
  firstName: 'John',
  lastName: 'Doe',
  // input: none
  // output: string
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // input: string
  // output: undefined
  setFullName(fullName) {
    const arr = fullName.split(' ');
    [this.firstName, this.lastName] = arr;
  },
};

console.log(user);

console.log(user.getFullName());

user.setFullName('Jane Doe');
console.log(user.getFullName());
