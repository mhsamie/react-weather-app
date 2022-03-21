import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Loader from "react-animated-loader";

function Search() {
  const [city, setCity] = useState("");
  const [descript, setDescript] = useState(false);
  const [weather, setWeather] = useState({});

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function displayTemp(response) {
    console.log(response);
    setDescript(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      cityName: response.data.name,
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
          </form>
        </div>
        <div className="show-temp">
          <h3>{weather.cityName}</h3>
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
        </form>
        <div className="show-temp">
          <h3> Search For a City</h3>
          <Loader />
          <h3>To See The Forcast</h3>
        </div>
      </div>
    );
  }
}

export default Search;
