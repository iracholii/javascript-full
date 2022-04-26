const checkboxInput = document.querySelector('.task-status');
const handleChange = event => {
  console.log(event.target.checked);
};
checkboxInput.addEventListener('change', handleChange);
