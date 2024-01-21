const hamburgerBtn = document.querySelector('.hamburger-btn');
const mainNavLinksContainer = document.querySelector(
  '.main-navigation__links-container'
);
const lastModified = document.querySelector('#lastModified');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mainNavLinksContainer.classList.toggle('open');
});

lastModified.textContent = document.lastModified;
