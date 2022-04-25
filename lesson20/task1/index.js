export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }

  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User('Ira', 25);
console.log(user1);

const user2 = new User('Jake', 28);
console.log(user2);

user1.sayHi();
user1.requestNewPhoto();
console.log(user1.setAge(36));
console.log(user1.setAge(-2));
console.log(user1.setAge(2));

console.log(User.createEmpty());
