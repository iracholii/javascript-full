const buttons = document.querySelectorAll('.btn');
const handleClick = () => {
  console.log(event.target.textContent);
};
const buttonsArray = [...buttons];
buttonsArray.map(button => {
  button.addEventListener('click', handleClick);
});
