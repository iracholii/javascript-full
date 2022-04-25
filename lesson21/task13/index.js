export const getSection = num => {
  const elem = document.querySelector(`span[data-number='${num}']`);
  return elem.closest('.box');
};
console.log(getSection(4));
