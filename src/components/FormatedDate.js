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
  let hour = props.time.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.time.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let day = days[props.time.getDay()];
  return (
    <div>
      {day} {hour}:{minute}
    </div>
  );
}

export default DateFormat;
