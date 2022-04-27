const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      checkbox.checked = done;

      const onChangeHandler = event => {
        // const checkboxId = event.target.dataset.id;
        if (event.target.checked) {
          event.target.closest('.list__item').classList.add('list__item_done');
        }
        if (!event.target.checked) {
          event.target.closest('.list__item').classList.remove('list__item_done');
        }
      };
      checkbox.addEventListener('change', onChangeHandler);

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

// algo
// 1. add id for checkboxes
// 2. if checkbox clicked - change its status
// 3. if Create button clicked - get text from input (.task-input),
// add it to the tasks array and clear the (.task-input) field
// 4. renew to-do list

const createButtonElem = document.querySelector('.create-task-btn');

const onCreateClickHandler = () => {
  const taskElem = document.querySelector('.task-input');
  if (!taskElem.value) {
    return;
  }
  tasks.push({ text: taskElem.value, done: false });
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskElem.value = null;
};

createButtonElem.addEventListener('click', onCreateClickHandler);

// const listItemCheckboxArr = [...document.querySelectorAll('.list__item-checkbox')];

const idGenerator = () => {
  const id = Math.random().toString().slice(2, 10);
  return id;
};

// listItemCheckboxArr.map(checkbox => {
//   checkbox.setAttribute('data-id', idGenerator());

//   const onChangeHandler = event => {
//     // const checkboxId = event.target.dataset.id;
//     if (event.target.checked) {
//       event.target.closest('.list__item').classList.add('list__item_done');
//     }
//     if (!event.target.checked) {
//       event.target.closest('.list__item').classList.remove('list__item_done');
//     }
//   };
//   checkbox.addEventListener('change', onChangeHandler);
// });
