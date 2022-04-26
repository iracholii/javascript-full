const textInput = document.querySelector('.text-input');
const handleChange = () => {
  console.log(event.target.value);
};
textInput.addEventListener('change', handleChange);
