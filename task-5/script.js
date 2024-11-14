// script.js
document.getElementById('fetch-weather').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'YOUR_API_KEY_HERE';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9e2f483b43a855cabbdf6c768ba639dd`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod === "404") {
        alert("Location not found");
        return;
    }

    const locationName = data.name;
    const temperature = data.main.temp;
    const weatherConditions = data.weather[0].description;

    document.getElementById('location-name').textContent = locationName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('weather-conditions').textContent = `Conditions: ${weatherConditions}`;
}
