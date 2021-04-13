fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=c4b7605096874a8a3ce3a1c52cd53a6f"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const descrip = data.weather[0].description;
    const name = data.name;
    const currentTemp = data.main.temp;
    const feelsLikeTemp = Math.round(data.main.feels_like);
    const con = data.sys.country;
    const humid = data.main.humidity;
    const press = data.main.pressure;
    const visible = data.visibility;
    const windSpeed = data.wind.speed;
    const maxTemp = data.main.temp_min;
    const minTemp = data.main.temp_max;
    document.getElementById("des").innerHTML = `${descrip}`;
    document.getElementById("name").innerHTML = `${name}`;
    document.getElementById("current_temp").innerHTML = `${currentTemp}&deg;C`;
    document.getElementById(
      "feels_like_temp"
    ).innerHTML = `Feels like: ${feelsLikeTemp}&deg;C`;
    document.getElementById("country").innerHTML = `${con}`;
    document.getElementById("humidity").innerHTML = `${humid} %`;
    document.getElementById("pressure").innerHTML = `${press} Pa`;
    document.getElementById("visibility").innerHTML = `${visible} m`;
    document.getElementById("speed_wind").innerHTML = `${windSpeed} m/s`;
    document.getElementById("max_temp").innerHTML = `${maxTemp}&deg;C`;
    document.getElementById("min_temp").innerHTML = `${minTemp}&deg;C`;
  })
  .catch(() => alert("Error"));
