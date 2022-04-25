export const finishForm = () => {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'login');
  document.querySelector('.login-form').prepend(newInput);

  const passwordEl = document.querySelector('input[name="password"]');
  passwordEl.setAttribute('type', 'password');
};
