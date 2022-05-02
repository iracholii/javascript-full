export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    return { ...acc, [key]: JSON.parse(value) };
  }, {});
};

localStorage.setItem('sting', JSON.stringify('string'));
localStorage.setItem('number', JSON.stringify(25));
localStorage.setItem('array', JSON.stringify([1, 's', 2]));
localStorage.setItem('boolean', JSON.stringify(true));
localStorage.setItem('object', JSON.stringify({ a: 'g', o: '2' }));
