import { getItem } from './storage.js';

export const listElem = document.querySelector('.list');

export const renderTasks = () => {
  listElem.innerHTML = '';

  const tasksList = getItem('tasksList') || [];

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(element => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', `${element.id}`);
      checkbox.checked = element.done;
      checkbox.classList.add('list__item-checkbox');
      if (element.done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, element.text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
