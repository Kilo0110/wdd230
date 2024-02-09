const currentTemp = document.querySelector('#temp-info');
const weatherIcon = document.querySelector('#weather-icon');
const remark = document.querySelector('#remark');

const apiKey = '50389e2f15937c99e42b97342669ba07';
const latitude = '6.5162';
const longitude = '3.2549';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

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

const displayResults = (data) => {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  remark.textContent = desc;
};

apiFetch();
