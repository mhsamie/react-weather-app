import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forcast.css";
import ForcastDays from "./days";
function WeatherForcast(props) {
  const [info, setInfo] = useState(false);
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    setInfo(false);

    let apiKey = "2d35b2ada741444a16992394a8f095ad";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(responseHandler);
  }, [props.coord]);
  function responseHandler(response) {
    console.log(response.data.daily);
    setForcast(response.data.daily);

    setInfo(true);
  }

  if (info) {
    return (
      <div>
        {forcast.map((everyDay, index) => {
          if (index < 6) {
            return (
              <div className="forcast-part" key={index}>
                <ForcastDays data={everyDay} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default WeatherForcast;
