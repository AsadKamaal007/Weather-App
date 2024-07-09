async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'a5f59437f3msh8b708a8da424c00p193090jsna4fa6397966d';  // Replace with your actual API key
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherInfo = `
        <div class="icon"><img src="${weatherIcon}" alt="Weather Icon"></div>
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}

