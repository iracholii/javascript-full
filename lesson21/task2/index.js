export const getTitleElement = className => {
  const titleElem = document.querySelector(className);
  console.dir(titleElem);
  return titleElem;
};

getTitleElement('.title');

export const getInputElement = type => {
  const inputElem = document.querySelector(`input[type=${type}]`);
  console.dir(inputElem);
  return inputElem;
};

getInputElement('text');
