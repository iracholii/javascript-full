const baseUrl = 'https://627b8319a01c46a8531fa362.mockapi.io/api/v1/registeredUsers';

const emailInputElem = document.querySelector('input[type="email"]');
const userNameInputElem = document.querySelector('input[type="text"]');
const passwordInputElem = document.querySelector('input[type="password"]');

const loginFormElem = document.querySelector('.login-form');
const submitButtonElem = document.querySelector('.submit-button');

const formValidation = () => {
  if (loginFormElem.reportValidity()) {
    submitButtonElem.disabled = false;
  }
};

const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const onSubmitButtonHandler = event => {
  event.preventDefault();

  const userData = {
    email: emailInputElem.value,
    name: userNameInputElem.value,
    password: passwordInputElem.value,
  };

  createUser(userData)
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));

      emailInputElem.value = '';
      userNameInputElem.value = '';
      passwordInputElem.value = '';

      submitButtonElem.disabled = true;
    });
};

loginFormElem.addEventListener('submit', onSubmitButtonHandler);
loginFormElem.addEventListener('change', formValidation);
