import React from 'react'
import Loader from "react-animated-loader";
import DateFormat from "./FormatedDate";
import ConvertTemp from "./ConvertEngin";
import WeatherIcon from "./icons";

const DispalyWeather = ({ weather }) => {
  return (
    weather ?
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
      :
      <div className="show-temp">
        <h3> Search For a City</h3>
        <Loader />
        <h3>To See The Forcast</h3>
      </div>
  )
}

export default DispalyWeather