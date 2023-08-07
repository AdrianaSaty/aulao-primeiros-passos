const input = document.querySelector('#city');
const temperatureDiv = document.querySelector('#temperature');
document.getElementById("searchWeatherButton").onclick = async () => {
    await searchWeather();
};

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

    // adicionar item por item, retirar essa parte:
    temperatureDiv.innerHTML = ` 
        <h2>${city}</h2>
        <img src="${iconUrl}" alt="${description}">
        <p class="capitalize">${description}</p>
        <p>Temperatura: ${temp}°C</p>`
}