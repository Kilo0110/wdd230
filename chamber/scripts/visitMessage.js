const visitMessageElement = document.querySelector('#visitMessage');

let lastVisit = localStorage.getItem('lastVisit') || 0;

const today = new Date();

const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

if (!lastVisit) {
  // First Visit
  const presentVisit = Date.now();
  localStorage.setItem('lastVisit', presentVisit);
  visitMessageElement.textContent =
    'Welcome! Let us know if you have any questions.';
} else {
  let daysSinceLastVisit = Math.floor((today - lastVisit) / oneDay);

  if (daysSinceLastVisit < 1) {
    // Less than a day has passed
    visitMessageElement.textContent = 'Back so soon! Awesome!';
  } else {
    // More than a day has passed
    var message =
      'You last visited ' +
      daysSinceLastVisit +
      ' day' +
      (daysSinceLastVisit === 1 ? '' : 's') +
      ' ago.';
    visitMessageElement.textContent = message;
  }
}
