const buttons = document.querySelectorAll('.btn');
[...buttons].map(button => {
  const handleClick = () => {
    console.log(event.target.textContent);
  };
  button.addEventListener('click', handleClick);
  return button;
});
