const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const counterChangeHandler = event => {
  if (!event.target.classList.contains('counter__button')) {
    return null;
  }

  const oldValue = Number(counterValueElem.textContent);
  const { action } = event.target.dataset;
  // const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  let newValue;
  if (action === 'decrease') {
    newValue = oldValue - 1;
  } else {
    newValue = oldValue + 1;
  }

  counterValueElem.textContent = newValue;

  localStorage.setItem('counterValue', newValue);
};

counterElem.addEventListener('click', counterChangeHandler);

const storageChangeHandler = event => {
  counterValueElem.textContent = event.newValue;
};

window.addEventListener('storage', storageChangeHandler);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
