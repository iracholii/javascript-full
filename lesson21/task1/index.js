export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
export const renderTasks = tasksList => {
  const listElement = document.querySelector('.list');

  const listItemsElems = tasksList.map(element => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    if (element.done) {
      listItemElem.classList.add('list__item_done');
    }

    const checkboxElem = document.createElement('input');
    checkboxElem.checked = element.done;
    checkboxElem.classList.add('list__item-checkbox');
    checkboxElem.setAttribute('type', 'checkbox');

    listItemElem.append(checkboxElem, element.text);
    return listItemElem;
  });
  listElement.append(...listItemsElems);
};

renderTasks(tasks);
