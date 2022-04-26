const searchButton = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
searchButton.addEventListener('click', () => {
  console.log(searchInput.value);
});
