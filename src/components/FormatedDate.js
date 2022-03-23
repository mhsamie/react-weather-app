import React from "react";

function DateFormat(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.time.getDay()];
  return <div>{day}</div>;
}

export default DateFormat;
