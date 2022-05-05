/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

const getDelay = () => {
  return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
};

export const requestUserData = (userId, callback) => {
  setTimeout(() => {
    if (userId === 'broken') {
      callback(null, 'Failed to load user data');
      return;
    }

    callback({
      userId: userId,
      email: userId + '@example.com',
    });
  }, getDelay());
};

const callback = (obj, error) => {
  if (obj === null) {
    console.log(error);
    return;
  }
  console.log(obj);
};

requestUserData('25d', callback);
requestUserData('broken', callback);
requestUserData('2fd88h', callback);
