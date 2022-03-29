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

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sate"];

    return days[day];
  }

  return (
    <>
      <div>{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div>
        <span>
          <strong>{maxTemperature()}</strong>
        </span>{" "}
        <span>{minTemperature()}</span>
      </div>
    </>
  );
}
export default ForcastDays;
