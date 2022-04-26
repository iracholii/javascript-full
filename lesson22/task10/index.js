const buttons = [...document.querySelectorAll('.pagination__page')];

const handleClick = event => {
  const elem = event.target;
  console.log(elem.dataset.pageNumber);
};

buttons.map(button => {
  button.addEventListener('click', handleClick);
  return button;
});
