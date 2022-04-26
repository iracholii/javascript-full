const buttons = document.querySelectorAll('.btn');
const handleClick = () => {
  console.log(event.target.textContent);
};
[...buttons].map(button => {
  button.addEventListener('click', handleClick);
  return button;
});
