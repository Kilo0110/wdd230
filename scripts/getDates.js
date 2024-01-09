const currentYearElement = document.querySelector('#currentYear');

const lastModifiedElement = document.querySelector('#lastModified');

const date = new Date();
const currentYear = date.getFullYear();

currentYearElement.textContent = currentYear;

lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
