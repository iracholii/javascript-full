const idGenerator = () => {
  return Math.random().toString().slice(2, 10);
};

const tasks = [
  { text: 'Buy milk', done: false, id: idGenerator() },
  { text: 'Pick up Tom from airport', done: false, id: idGenerator() },
  { text: 'Visit party', done: false, id: idGenerator() },
  { text: 'Visit doctor', done: true, id: idGenerator() },
  { text: 'Buy meat', done: true, id: idGenerator() },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(element => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = element.done;
      checkbox.classList.add('list__item-checkbox');
      if (element.done) {
        listItemElem.classList.add('list__item_done');
      }

      ///
      checkbox.dataset.id = element.id;
      ///

      listItemElem.append(checkbox, element.text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

///
const listChangeHandler = event => {
  const checkboxId = event.target.dataset.id;

  if (tasks.find(task => task.id === checkboxId).done) {
    tasks.find(task => task.id === checkboxId).done = false;
  } else {
    tasks.find(task => task.id === checkboxId).done = true;
  }

  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('change', listChangeHandler);
///

///
const createButtonElem = document.querySelector('.create-task-btn');

const onCreateClickHandler = () => {
  const taskElem = document.querySelector('.task-input');
  if (!taskElem.value) {
    return;
  }
  tasks.push({ text: taskElem.value, done: false, id: idGenerator() });
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskElem.value = null;
};

createButtonElem.addEventListener('click', onCreateClickHandler);
///

// algo
// 1. add id for checkboxes
// 2. if checkbox clicked - change its status
// 3. if Create button clicked - get text from input (.task-input),
// add it to the tasks array and clear the (.task-input) field
// 4. renew to-do list
