/* eslint-disable max-classes-per-file */

// algo
// 1. class User - create a class with read only properties id, name, sessionId (strings)
// 2. class UserRepository - create a class with a users property (array)
// 3. add methods getUserNames, getUserIds, getUserNamesById

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

// class UserRepository {
//   constructor(array) {
//     this.users = array;
//     Object.freeze(this.users);
//   }

//   getUsersNames() {
//     const result = [];
//     for (let index = 0; index < this.users.length; index += 1) {
//       result.push(this.users[index].name);
//     }
//     return result;
//   }

//   getUsersIds() {
//     const result = [];
//     for (let index = 0; index < this.users.length; index += 1) {
//       result.push(this.users[index].id);
//     }
//     return result;
//   }

//   getUsersNameById(id) {
//     for (let index = 0; index < this.users.length; index += 1) {
//       if (this.users[index].id === id) {
//         return this.users[index].name;
//       }
//     }
//   }
// }

export class UserRepository {
  constructor(array) {
    this._users = array;
    Object.freeze(this._users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(user => user.name);
  }

  getUserIds() {
    return this.users.map(user => user.id);
  }

  getUserNameById(id) {
    //   const result = this.users.filter(user => {
    //     return user.id === id;
    //   });
    //   return result[0].name;
    // }
    return this.users.find(user => user.id === id).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id1');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const user2 = new User('2', 'Kate', 'session-id2');
const user3 = new User('3', 'Jake', 'session-id3');
const test = new UserRepository([user, user2, user3]);
console.log(test);
console.log(test.getUserNames());
console.log(test.getUserIds());
console.log(test.getUserNameById('3'));

// console.log(test.users);
// test.users.reverse();

// console.log(User);
// console.log(UserRepository);
