const visitCountElement = document.querySelector('#visitCount');

let visitCount = localStorage.getItem('pageVisits');

if (!visitCount) {
  visitCount = 1;
  visitCountElement.textContent = visitCount;
  localStorage.setItem('pageVisits', visitCount);
} else {
  visitCount = parseInt(visitCount);
  visitCount++;
  localStorage.setItem('pageVisits', visitCount);
  visitCountElement.textContent = visitCount;
}
