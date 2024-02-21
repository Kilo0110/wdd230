const banner = document.querySelector('.banner');
const closeBannerToggle = document.querySelector('#close-banner-toggle');

const advertisementContainer = document.querySelector(
  '.advertisement-container'
);

// Get the current date
const currentDate = new Date();

// Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const currentDay = currentDate.getDay();

// Check if the current day is Monday (1), Tuesday (2), or Wednesday (3)
if (currentDay >= 1 && currentDay <= 3) {
  // Display the banner
  banner.style.display = 'flex';
} else {
  // Hide the banner
  banner.style.display = 'none';
}

closeBannerToggle.addEventListener('click', () => {
  banner.style.display = 'none';
});

// Function to fetch data from the JSON file
async function fetchData() {
  try {
    // URL of the JSON file hosted on GitHub
    const url = 'https://kilo0110.github.io/wdd230/chamber/data/members.json';

    // Fetch the JSON data
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse JSON data and return
    return await response.json();
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
    return null; // Return null in case of error
  }
}

// Function to filter companies with silver or gold membership
function filterSilverAndGoldCompanies(data) {
  if (!data || !data.companies || data.companies.length === 0) {
    return [];
  }
  return data.companies.filter(
    (company) =>
      company.membershipLevel === 'Silver' || company.membershipLevel === 'Gold'
  );
}

// Function to randomly select a unique company from the array
function selectUniqueRandomCompany(companies, selectedCompanies) {
  const availableCompanies = companies.filter(
    (company) => !selectedCompanies.includes(company)
  );
  const randomIndex = Math.floor(Math.random() * availableCompanies.length);
  return availableCompanies[randomIndex];
}

// Function to display company information on a card
function displayCompanyOnCard(company) {
  const advertisementCard = document.createElement('div');
  advertisementCard.classList.add('advertisement');

  if (advertisementCard && company) {
    advertisementCard.innerHTML = `
      <img
        src="${company.image}"
        alt="${company.name} logo"
        class="advertisement__img"
      >
      <h3 class="advertisement__title">${company.name}</h3>
      <p  class="advertisement__text">${company.about}</p>
    `;

    advertisementContainer.appendChild(advertisementCard);
  }
}

async function fetchDataAndDisplay() {
  try {
    // Fetch data
    const data = await fetchData();

    // Filter silver and gold companies
    const silverAndGoldCompanies = filterSilverAndGoldCompanies(data);

    // Initialize an array to store selected companies
    const selectedCompanies = [];

    // Display companies on cards
    for (let i = 1; i <= 3; i++) {
      // Select a unique random company
      const company = selectUniqueRandomCompany(
        silverAndGoldCompanies,
        selectedCompanies
      );
      if (company) {
        // Display company on card
        displayCompanyOnCard(company, `card${i}`);
        // Add selected company to the array
        selectedCompanies.push(company);
      }
    }
  } catch (error) {
    console.error('Error fetching and displaying data:', error);
  }
}

fetchDataAndDisplay();
