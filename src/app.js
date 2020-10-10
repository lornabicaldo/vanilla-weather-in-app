function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let pressureElement = document.querySelector("#pressure");
  let feelsLikeElement = document.querySelector("#feels-like");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  speedElement.innerHTML = Math.round(response.data.wind.speed);
  pressureElement.innerHTML = response.data.main.pressure;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "8faad2c6827a8ece72c2320ecccefbdb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Stuttgart&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
