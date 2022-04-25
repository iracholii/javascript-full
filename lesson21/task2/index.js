const getTitleElement = className => {
  const titleElem = document.querySelector(`.${className}`);
  console.dir(titleElem);
  return titleElem;
};

getTitleElement('title');

const getInputElement = input => {
  const inputElem = document.querySelector(`[type=${input}]`);
  console.dir(inputElem);
  return inputElem;
};

getInputElement('text');
