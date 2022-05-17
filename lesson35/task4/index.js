export const parseUser = string => {
  try {
    return JSON.parse(string);
  } catch (err) {
    return null;
  }
};

const test1 = JSON.stringify({ data: 455565469784 });
const test2 = { data: 455565469784 };

console.log(parseUser(test1));
console.log(parseUser(test2));
