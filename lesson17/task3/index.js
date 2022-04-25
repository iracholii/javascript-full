export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Kate',
  sayHi() {
    console.log(`Hi, ${this.name}!`);
  },
};

// user.sayHi();
const res = defer(user.sayHi, 5000);
res.call(user);
