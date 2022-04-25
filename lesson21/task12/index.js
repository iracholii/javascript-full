export const squaredNumbers = () => {
  const numberElemsArr = [...document.querySelectorAll('.number')];
  numberElemsArr.map(element => {
    element.dataset.squaredNumber = element.dataset.number * element.dataset.number;
    return element;
  });
};
