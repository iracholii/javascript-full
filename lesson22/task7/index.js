const buttons = document.querySelectorAll('.btn');
const handleClick = () => {
  const text = event.target.textContent;
  console.log(text);
};
[...buttons].map(button => {
  button.addEventListener('click', handleClick);
  return button;
});
