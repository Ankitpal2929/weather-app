// Replace with your API key and endpoint
const apiKey = 'YOUR_API_KEY';
const endpoint = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`; // Example endpoint

// Fetch weather data from API
fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the data to see its structure

        // Update DOM elements with data
        document.getElementById('location').textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById('icon').src = data.current.condition.icon;
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
        document.getElementById('description').textContent = data.current.condition.text;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
