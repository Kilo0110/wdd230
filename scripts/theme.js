const themeModeToggle = document.querySelector('.theme-mode-toggle');
const body = document.querySelector('body');
const main = document.querySelector('main');

themeModeToggle.addEventListener('click', () => {
  themeModeToggle.classList.toggle('dark');
  body.classList.toggle('dark');
  main.classList.toggle('dark');
});
