const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');
const passwordErrorMsgs = document.querySelectorAll('.error');
const rangeInput = document.querySelector('#rating');
const rangeValue = document.querySelector('#rangeValue');
const submitBtn = document.querySelector('.submit-btn');

const passwordValidationRegEx = /[a-zA-Z0-9]/g;

document.addEventListener('DOMContentLoaded', () => {
  rangeValue.textContent = rangeInput.value;
});

rangeInput.addEventListener('input', () => {
  rangeValue.textContent = rangeInput.value;
});

submitBtn.addEventListener('click', () => {
  if (
    !passwordValidationRegEx.test(passwordInput.value) ||
    !passwordValidationRegEx.test(confirmPasswordInput.value)
  ) {
    passwordErrorMsgs.forEach((msg) => {
      msg.style.display = 'block';
    });
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords must be the same');
  }
});
