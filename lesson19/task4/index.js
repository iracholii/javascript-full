export default {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(userName) {
    [this.firstName, this.lastName] = userName.split(' ');
  },
};

// console.log(user.fullName);
// user.fullName = 'Lane Mae';
// console.log(user.firstName);
// console.log(user.fullName);
