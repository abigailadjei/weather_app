document.getElementById('search-btn').addEventListener('click', function () {
  const country = document.getElementById('country').value;
  const apiKey = '9c49f019dd3b5b1564a921416b0d0194'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("country-name").innerText = `Country: ${data.sys.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("feels-like").innerText = `Feels like: ${data.main.feels_like}°C`;
        document.getElementById("wind").innerText = `Wind speed: ${data.wind.speed} m/s`;
        document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;

        
        // Set weather icon
        const icon = data.weather[0].icon;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        // Fetch the country flag using the country code
        const countryCode = data.sys.country;
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
          .then(response => response.json())
          .then(countryData => {
            const flagUrl = countryData[0].flags.png; // Get the flag image URL
            document.getElementById('country-flag').src = flagUrl; // Set the flag image
          })
          .catch(error => {
            document.getElementById('country-flag').src = 'fallback-flag-url.png';  
            console.error('Error fetching country flag:', error);
          });

 

// Add click event listeners to each menu item
document.getElementById("guide-link").addEventListener("click", () => showSection("guide-section"));
document.getElementById("home-link").addEventListener("click", () => showSection("home-section"));
document.getElementById("about-link").addEventListener("click", () => showSection("about-section"));
document.getElementById("services-link").addEventListener("click", () => showSection("services-section"));
document.getElementById("contact-link").addEventListener("click", () => showSection("contact-section"));


  // Mobile menu toggle functionality
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarMenu = document.querySelector('.navbar-menu');

  mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  

  
  });
      }
    })
  })

 
