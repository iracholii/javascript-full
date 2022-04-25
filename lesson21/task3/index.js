const getItemsList = className => {
  const elementsList = document.querySelectorAll(`.${className}`);
  console.dir(elementsList);
  return elementsList;
};

getItemsList('technology');

const getItemsArray = className => {
  const elementsArray = Array.from(document.querySelectorAll(`.${className}`));
  console.dir(elementsArray);
  return elementsArray;
};

getItemsArray('tool');