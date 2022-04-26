const inputElem = document.querySelector('.text-input');

const changeFunk = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', changeFunk);
