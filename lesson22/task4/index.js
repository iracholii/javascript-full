const checkbox = document.querySelector('.task-status');
const checkboxIfChecked = () => {
  console.log(checkbox.checked);
};
checkbox.addEventListener('change', checkboxIfChecked);
