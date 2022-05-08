export const delay = miliseconds => {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(), miliseconds);
  });
  return promise;
};

delay(3000).then(() => console.log('done'));
