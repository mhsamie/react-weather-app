import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
function Search() {
  const [city, setCity] = useState("");
  const [descript, setDescript] = useState(false);
  const [weather, setWeather] = useState({});

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function displayTemp(response) {
    setDescript(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function searchCity(event) {
    event.preventDefault();

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ef53446dcb07ea2a0fb8ef5e317e310&units=metric`;

    axios.get(apiUrl).then(displayTemp);
  }
  if (descript) {
    return (
      <>
        <div className="search">
          <form onSubmit={searchCity}>
            <input onChange={changeCity} type="search" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="show-temp">
          <h3>{city}</h3>
          <p>
            {weather.temperature}°{" "}
            <span>
              <span>C</span>
            </span>{" "}
            <span>
              | <span>F</span>
            </span>
          </p>

          <p>{weather.description}</p>
          <div>
            <p>wind speed: {weather.wind} km/h</p>
            <p>humidity: {weather.humidity}%</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="search">
        <form onSubmit={searchCity}>
          <input onChange={changeCity} type="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
