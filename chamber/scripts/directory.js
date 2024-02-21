const companyCardContainer = document.querySelector('.company-card-container');
const companyTableContainer = document.querySelector(
  '.company-table-container'
);

const gridViewToggle = document.querySelector('#grid-view-toggle-btn');

const listViewToggle = document.querySelector('#list-view-toggle-btn');

const companyTable = companyTableContainer.querySelector('table');

const url = 'https://kilo0110.github.io/wdd230/chamber/data/members.json';

async function fetchJSON() {
  try {
    // Fetch the JSON data
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse JSON data
    const data = await response.json();

    // Return the retrieved JSON data here
    return data;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
    return null;
  }
}

fetchJSON();

function createCardElements(companyData) {
  const companyCardDiv = document.createElement('div');
  const companyLogo = document.createElement('img');
  const companyName = document.createElement('h2');
  const companyAbout = document.createElement('p');
  const companyAddress = document.createElement('p');
  const cardFooter = document.createElement('div');
  const cardTable = document.createElement('table');
  const cardTableHead = document.createElement('thead');
  const cardTableBody = document.createElement('tbody');
  const cardTableHeadRow = document.createElement('tr');
  const cardTableHeadMembershipData = document.createElement('td');
  const cardTableHeadPhoneData = document.createElement('td');
  const cardTableBodyRow = document.createElement('tr');
  const cardTableBodyMembershipData = document.createElement('td');
  const cardTableBodyPhoneData = document.createElement('td');

  // Display company data in created element
  companyLogo.setAttribute('src', companyData.image);
  companyName.textContent = companyData.name;
  companyAbout.textContent = companyData.about;
  companyAddress.textContent = companyData.address;

  cardTableHeadMembershipData.textContent = 'Membership Level';
  cardTableHeadPhoneData.textContent = 'Phone Number';

  cardTableBodyMembershipData.textContent = companyData.membershipLevel;
  cardTableBodyPhoneData.textContent = companyData.phoneNo;

  // Appendd elements to necessary ancestors
  cardTableBodyRow.appendChild(cardTableBodyMembershipData);
  cardTableBodyRow.appendChild(cardTableBodyPhoneData);

  cardTableHeadRow.appendChild(cardTableHeadMembershipData);
  cardTableHeadRow.appendChild(cardTableHeadPhoneData);

  cardTableHead.appendChild(cardTableHeadRow);
  cardTableBody.appendChild(cardTableBodyRow);

  cardTable.appendChild(cardTableHead);
  cardTable.appendChild(cardTableBody);

  cardFooter.appendChild(cardTable);

  companyCardDiv.appendChild(companyLogo);
  companyCardDiv.appendChild(companyName);
  companyCardDiv.appendChild(companyAbout);
  companyCardDiv.appendChild(companyAddress);
  companyCardDiv.appendChild(cardFooter);

  companyCardDiv.classList.add('company-card');

  companyCardContainer.appendChild(companyCardDiv);
}

async function displayDataAsCards() {
  const data = await fetchJSON();

  if (data) {
    data.companies.forEach((companyData) => {
      createCardElements(companyData);
    });
  }
}

function createTableElements(companyData, companyTableHead, companyTableBody) {
  const companyTableBodyRow = document.createElement('tr');

  const companyTableBodyName = document.createElement('td');
  const companyTableBodyAddress = document.createElement('td');
  const companyTableBodyPhone = document.createElement('td');
  const companyTableBodyWebsite = document.createElement('td');

  companyTableBodyName.textContent = companyData.name;
  companyTableBodyAddress.textContent = companyData.address;
  companyTableBodyPhone.textContent = companyData.phoneNo;
  companyTableBodyWebsite.textContent = companyData.url;

  companyTableBodyRow.appendChild(companyTableBodyName);
  companyTableBodyRow.appendChild(companyTableBodyAddress);
  companyTableBodyRow.appendChild(companyTableBodyPhone);
  companyTableBodyRow.appendChild(companyTableBodyWebsite);

  companyTableBody.appendChild(companyTableBodyRow);
}

async function displayDataAsTable() {
  const data = await fetchJSON();

  if (data) {
    const companyTableHead = document.createElement('thead');
    const companyTableBody = document.createElement('tbody');

    const companyTableHeadRow = document.createElement('tr');

    const companyTableHeadName = document.createElement('th');
    const companyTableHeadAddress = document.createElement('th');
    const companyTableHeadPhone = document.createElement('th');
    const companyTableHeadWebsite = document.createElement('th');

    companyTableHeadName.textContent = 'Name';
    companyTableHeadAddress.textContent = 'Address';
    companyTableHeadPhone.textContent = 'Phone';
    companyTableHeadWebsite.textContent = 'Website';

    companyTableHeadRow.appendChild(companyTableHeadName);
    companyTableHeadRow.appendChild(companyTableHeadAddress);
    companyTableHeadRow.appendChild(companyTableHeadPhone);
    companyTableHeadRow.appendChild(companyTableHeadWebsite);

    companyTableHead.appendChild(companyTableHeadRow);

    companyTable.appendChild(companyTableHead);
    companyTable.appendChild(companyTableBody);
    data.companies.forEach((companyData) => {
      createTableElements(companyData, companyTableHead, companyTableBody);
    });
  }
}

gridViewToggle.addEventListener('click', () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      displayDataAsCards();
      companyCardContainer.style.display = 'grid';
      companyTableContainer.style.display = 'none';
    });
  } else {
    displayDataAsCards();
    companyCardContainer.style.display = 'grid';
    companyTableContainer.style.display = 'none';
  }
});

listViewToggle.addEventListener('click', () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      displayDataAsTable();
      companyTableContainer.style.display = 'block';
      companyCardContainer.style.display = 'none';
    });
  } else {
    displayDataAsTable();
    companyTableContainer.style.display = 'block';
    companyCardContainer.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  displayDataAsCards();
  companyCardContainer.style.display = 'grid';
  companyTableContainer.style.display = 'none';
});
