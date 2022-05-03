import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

const idGenerator = () => {
  return Math.random().toString().slice(2, 10);
};

export const onCreateClickHandler = () => {
  const taskElem = document.querySelector('.task-input');
  if (!taskElem.value) {
    return;
  }

  const tasksList = getItem('tasksList') || [];
  const newTasksList = [...tasksList, { text: taskElem.value, done: false, id: idGenerator() }];

  taskElem.value = null;

  setItem('tasksList', newTasksList);
  renderTasks();
};

export const listChangeHandler = event => {
  const tasksList = getItem('tasksList');

  let checkboxId;
  let checkbox;

  if (event.target.classList.contains('list__item-checkbox')) {
    checkbox = event.target;
    checkboxId = event.target.dataset.id;
  }

  if (event.target.classList.contains('list__item')) {
    checkbox = event.target.querySelector('.list__item-checkbox');
    checkboxId = checkbox.dataset.id;
  }

  const newTasksList = tasksList.map(task => {
    if (task.id === checkboxId) {
      const done = checkbox.checked;
      return { ...task, done };
    }
    return task;
  });

  setItem('tasksList', newTasksList);
  renderTasks();
};
