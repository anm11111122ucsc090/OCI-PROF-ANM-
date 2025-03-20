const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API Key

// Fetch weather data from OpenWeatherMap
async function getWeather() {
    const city = document.getElementById('city-input').value;
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `http
