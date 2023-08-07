const input = document.querySelector('#city');
const temperatureDiv = document.querySelector('#temperature');
const weatherForm = document.getElementById('weatherForm');

weatherForm.addEventListener("submit", async () => {
    event.preventDefault();
    await searchWeather();
});

async function searchWeather() {
    const city = input.value;
    const lang = 'pt';
    const celsius = 'metric'
    const APIkey = '3ed581ededecc702e7c6bf69d2351db9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=${celsius}&appid=${APIkey}`;

    const weatherResponse = await fetch(url)
    const weatherData = await weatherResponse.json()
    console.log(weatherData.body)
    showWeatherData(weatherData)
}

function showWeatherData(weatherData) {
    const temp = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    const city = input.value;

    temperatureDiv.innerHTML = "";

    const cityHeading = document.createElement("h2");
    cityHeading.textContent = city;

    const iconImage = document.createElement("img");
    iconImage.src = iconUrl;
    iconImage.alt = description;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className = "capitalize";
    descriptionParagraph.textContent = description;

    const temperatureParagraph = document.createElement("p");
    temperatureParagraph.textContent = `Temperatura: ${temp}°C`;

    temperatureDiv.appendChild(cityHeading);
    temperatureDiv.appendChild(iconImage);
    temperatureDiv.appendChild(descriptionParagraph);
    temperatureDiv.appendChild(temperatureParagraph);
}