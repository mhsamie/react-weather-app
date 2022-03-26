import React, { useState } from "react";
import axios from "axios";
import "./Forcast.css";
import WeatherIcon from "./icons";
function WeatherForcast(props) {
  const [info, setInfo] = useState(false);
  const [forcast, setForcast] = useState(null);

  function responseHandler(response) {
    console.log(response.data.daily);
    let thedate = new Date(response.data.daily[1].dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setForcast({
      maxTemp: Math.round(response.data.daily[1].temp.max),
      minTemp: Math.round(response.data.daily[1].temp.min),
      day: days[thedate.getDay()],
      icon: response.data.daily[1].weather[0].icon,
    });

    setInfo(true);
  }

  if (info) {
    return (
      <div>
        <div className="forcast-part">
          <span>{forcast.day}</span>
          <span>
            <WeatherIcon code={forcast.icon} size={30} />
          </span>
          <span>
            <span>
              <strong>{forcast.maxTemp}°</strong>
            </span>{" "}
            <span>{forcast.minTemp}°</span>
          </span>
        </div>
      </div>
    );
  } else {
    let apiKey = "2d35b2ada741444a16992394a8f095ad";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(responseHandler);
    return null;
  }
}
export default WeatherForcast;
