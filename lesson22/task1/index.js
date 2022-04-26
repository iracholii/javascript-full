const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsList = document.querySelector('.events-list');

function target(text, color) {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const divGreen = target.bind(null, 'DIV', 'green');
const pGreen = target.bind(null, 'P', 'green');
const spanGreen = target.bind(null, 'SPAN', 'green');

const divGrey = target.bind(null, 'DIV', 'grey');
const pGrey = target.bind(null, 'P', 'grey');
const spanGrey = target.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', divGreen);
pElem.addEventListener('click', pGreen);
spanElem.addEventListener('click', spanGreen);

divElem.addEventListener('click', divGrey, true);
pElem.addEventListener('click', pGrey, true);
spanElem.addEventListener('click', spanGrey, true);

const clearButton = document.querySelector('.clear-btn');
const removeButton = document.querySelector('.remove-handlers-btn');
const attachButton = document.querySelector('.attach-handlers-btn');

function clearEvents() {
  eventsList.innerHTML = '';
}
clearButton.addEventListener('click', clearEvents);

function removeEvents() {
  divElem.removeEventListener('click', divGreen);
  pElem.removeEventListener('click', pGreen);
  spanElem.removeEventListener('click', spanGreen);

  divElem.removeEventListener('click', divGrey, true);
  pElem.removeEventListener('click', pGrey, true);
  spanElem.removeEventListener('click', spanGrey, true);
}

removeButton.addEventListener('click', removeEvents);

function attachEvents() {
  divElem.addEventListener('click', divGreen);
  pElem.addEventListener('click', pGreen);
  spanElem.addEventListener('click', spanGreen);

  divElem.addEventListener('click', divGrey, true);
  pElem.addEventListener('click', pGrey, true);
  spanElem.addEventListener('click', spanGrey, true);
}

attachButton.addEventListener('click', attachEvents);
