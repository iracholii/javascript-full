const buttons = document.querySelectorAll('.btn');
const handleClick = event => {
  console.log(event.target.textContent);
};
const buttonsArray = [...buttons];
buttonsArray.map(button => {
  button.addEventListener('click', handleClick);
  return button;
});
