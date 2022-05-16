const baseUrl = 'https://627b8319a01c46a8531fa362.mockapi.io/api/v1/registeredUsers';

const emailInputElem = document.querySelector('input[type="email"]');
const userNameInputElem = document.querySelector('input[type="text"]');
const passwordInputElem = document.querySelector('input[type="password"]');

const loginFormElem = document.querySelector('.login-form');
const submitButtonElem = document.querySelector('.submit-button');

/// vol 1

// const formValidation = () => {
//   if (loginFormElem.reportValidity()) {
//     submitButtonElem.disabled = false;
//   }
// };

// const createUser = userData =>
//   fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(userData),
//   });

// const onSubmitButtonHandler = event => {
//   event.preventDefault();

//   const userData = {
//     email: emailInputElem.value,
//     name: userNameInputElem.value,
//     password: passwordInputElem.value,
//   };

//   createUser(userData)
//     .then(response => response.json())
//     .then(userData => {
//       alert(JSON.stringify(userData));

//       emailInputElem.value = '';
//       userNameInputElem.value = '';
//       passwordInputElem.value = '';

//       submitButtonElem.disabled = true;
//     });
// };

// loginFormElem.addEventListener('input', formValidation);
// loginFormElem.addEventListener('submit', onSubmitButtonHandler);

/// vol 2

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

const submitData = event => {
  event.preventDefault();

  const userData = Object.fromEntries(new FormData(loginFormElem));

  createUser(userData)
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));

      loginFormElem.reset();

      submitButtonElem.disabled = true;
    });
};

loginFormElem.addEventListener('input', formValidation);
loginFormElem.addEventListener('submit', submitData);

// 1. check if form is valid, if it is change the button status to enabled
// 2. get data from email, name and password inputs
// 3. save this data on server and get the response (alert) as an object with that data
// 4. clear inputs and set the submit button status to disabled
