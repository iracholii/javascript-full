/// chaining

export const calc = initialValue => {
  let res = initialValue;
  const calculator = {
    add(number) {
      res += number;
      return this;
    },

    subtract(number) {
      res -= number;
      return this;
    },

    mult(number) {
      res *= number;
      return this;
    },

    div(number) {
      res /= number;
      return this;
    },

    result() {
      return res;
    },
  };

  return calculator;
};

const test = calc(1).add(9).div(2).mult(5).subtract(5).result();
console.log(test);
