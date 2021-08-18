const API_KEY = "ff0fc0e0eea1d39a53e46628beb5ba47";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric
`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
