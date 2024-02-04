const form = document.querySelector('form');
const membershipInput = document.querySelector('#membershiplevel');
const timestampLabel = document.querySelector('#timestamplabel');
const submitBtn = document.querySelector('.submit-btn');
const date = new Date();

document.addEventListener('DOMContentLoaded', () => {
  timestampLabel.textContent = date.toDateString();
});
