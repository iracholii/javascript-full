/* eslint-disable camelcase */

import { renderUserData, renderRepos, clearList } from './script/render.js';
import { fetchUserData, fetchRepositories } from './script/requests.js';
import { showSpinner, hideSpinner } from './script/spinner.js';

const defaultUser = {
  avatar_url: 'https:avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showButtonElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUserHandler = () => {
  clearList();
  showSpinner();

  const userName = userNameInputElem.value;

  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => renderRepos(reposList))
    .catch(error => alert(error.message))
    .finally(() => hideSpinner());
};

showButtonElem.addEventListener('click', onSearchUserHandler);
