export const getSection = num => {
  const elem = document.querySelector(`span[data-number='${num}']`);
  const parent = elem.closest('.box');
  return parent.dataset.section;
};
