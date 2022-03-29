import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Loader from "react-animated-loader";
import DateFormat from "./FormatedDate";
import ConvertTemp from "./ConvertEngin";
import WeatherIcon from "./icons";
import WeatherForcast from "./Forcast";

function Search() {
  const [city, setCity] = useState("");
  const [descript, setDescript] = useState(false);
  const [weather, setWeather] = useState({});

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function displayTemp(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      cityName: response.data.name,
      cordinate: response.data.coord,
      thedate: new Date(response.data.dt * 1000),
    });
    setDescript(true);
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
            <input
              onChange={changeCity}
              type="search"
              placeholder="search again..."
            />
            <div className="search-icon">
              <img
                src="http://bmbgk.ir/assets/images/search.svg"
                alt="search"
              />
            </div>
          </form>
        </div>

        <div className="show-temp">
          <h3>{weather.cityName}</h3>
          <h5 className="date">
            <DateFormat time={weather.thedate} />
          </h5>

          <ConvertTemp temp={weather.temperature} />
          <div className="weather-icon">
            <WeatherIcon code={weather.icon} size={60} />
          </div>
          <div className="more-info">
            <p className="description">{weather.description}</p>

            <p>wind speed: {weather.wind} km/h</p>
            <p>humidity: {weather.humidity}%</p>
          </div>
        </div>
        <div className="show-temp-forcast">
          <WeatherForcast coord={weather.cordinate} size="30" />
        </div>
      </>
    );
  } else {
    return (
      <div className="search">
        <form onSubmit={searchCity}>
          <input onChange={changeCity} type="search" placeholder="search" />
          <div className="search-icon">
            <img src="http://bmbgk.ir/assets/images/search.svg" alt="search" />
          </div>
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
