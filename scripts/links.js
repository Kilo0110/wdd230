const baseURL = 'https://kilo0110.github.io/wdd230/';
const linksURL = 'https://kilo0110.github.io/wdd230/data/links.json';
const learningActivitiesContainer = document.querySelector(
  '.learning-activities-card ul'
);

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
  const weeks = data.weeks;
  weeks.forEach((week) => {
    const weekListItem = document.createElement('li');
    const weekLabelSpan = document.createElement('span');
    const links = week.links;
    weekLabelSpan.textContent = `${week.week}:`;
    weekListItem.appendChild(weekLabelSpan);

    links.forEach((link) => {
      const linkAnchorElement = document.createElement('a');
      linkAnchorElement.setAttribute('href', link.url);
      linkAnchorElement.textContent = ` ${link.title} |`;
      weekListItem.appendChild(linkAnchorElement);
      learningActivitiesContainer.appendChild(weekListItem);
    });
  });
}

getLinks();
