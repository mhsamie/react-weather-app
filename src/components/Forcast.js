import React from "react";
import "./Forcast.css";
import ForcastDays from "./days";

function WeatherForcast({ forcast }) {
  return (
    <div className="show-temp-forcast">
      {forcast.map((everyDay, index) =>
        index < 6 && <div className="forcast-part" key={index}>
          <ForcastDays data={everyDay} />
        </div>
      )}
    </div>
  );
}
export default WeatherForcast;
