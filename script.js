const input = document.querySelector('#city');
const temperatureDiv = document.querySelector('#temperature');

function searchWeather() {

    const city = input.value;
    const lang = 'pt';
    const celsius = 'metric'
    const APIkey = '3ed581ededecc702e7c6bf69d2351db9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=${celsius}&appid=${API}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

            temperatureDiv.innerHTML = `
        <h2>${city}</h2>
        <img src="${iconUrl}" alt="${description}">
        <p class="capitalize">${description}</p>
        <p>Temperatura: ${temp}°C</p>`
        })
        .catch(error => console.error(error));
}