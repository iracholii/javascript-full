// export const getLocalStorageData = () =>
//   Object.entries(localStorage).reduce((acc, [key, value]) => {
//     let newValue;
//     try {
//       newValue = JSON.parse(value);
//     } catch (error) {
//       newValue = value;
//     }
//     return { ...acc, [key]: newValue };
//   }, {});

export const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }

    acc[key] = newValue;
    return acc;
  }, {});

localStorage.setItem('sting', 'string');
localStorage.setItem('number', 25);
localStorage.setItem('array', JSON.stringify([1, 's', 2]));
localStorage.setItem('boolean', true);
localStorage.setItem('object', JSON.stringify({ a: 'g', o: '2' }));

console.log(getLocalStorageData());
