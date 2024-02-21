const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const forecastContainer = document.querySelector(
  '.three-day-forecast-container'
);

const apiKey = '50389e2f15937c99e42b97342669ba07';
const latitude = '6.5833';
const longitude = '3.75';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

const apiFetch = async () => {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

async function fetchForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displayResults = (data) => {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://www.openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
};

const displayForecast = (data) => {
  const weatherForecastList = data.list;
  console.log(weatherForecastList);

  weatherForecastList.forEach((weatherItem) => {
    const dataDateText = weatherItem.dt_txt;

    // Split the string at the space to separate date and time parts
    const parts = dataDateText.split(' ');

    // Extract the date part (the first part)
    const datePart = parts[0];

    forecastContainer.innerHTML = `${forecastContainer.innerHTML}
      <div class="forecast">
      <h3>${datePart}</h3>
        <figure
          class="three-day-forecast"
          id="day-one-forecast"
        >
          <img
            src="https://www.openweathermap.org/img/w/${weatherItem.weather[0].icon}.png"
            alt="${weatherItem.weather[0].main}"
            id="weather-icon"
          >
          <figcaption>${weatherItem.weather[0].description}</figcaption>
        </figure>
      </div>
    `;
  });
};

fetchForecast();
apiFetch();
