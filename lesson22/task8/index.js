const textInput = document.querySelector('.text-input');
const handleChange = event => {
  console.log(event.target.value);
};
textInput.addEventListener('change', handleChange);
