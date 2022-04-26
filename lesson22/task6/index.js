const button = document.querySelector('.single-use-btn');
const buttonFunk = () => {
  console.log('clicked');
  button.removeEventListener('click', buttonFunk);
};
button.addEventListener('click', buttonFunk);
