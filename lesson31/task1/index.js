/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return promise;
};

const res = requestUserData('id-12458');
// const res = requestUserData('broken');

res.then(data => console.log(data)).catch(error => console.log(error));
