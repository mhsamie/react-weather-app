import React from "react";
import WeatherIcon from "./icons";
function ForcastDays(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <>
      <span>{day()}</span>
      <span>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </span>
      <span>
        <span>
          <strong>{maxTemperature()}</strong>
        </span>{" "}
        <span>{minTemperature()}</span>
      </span>
    </>
  );
}
export default ForcastDays;
