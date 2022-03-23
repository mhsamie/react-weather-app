import React, { useState } from "react";
import "./convert.css";
function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <>
        <p className="temp">
          {props.temp}°{" "}
          <span className="convert">
            <span>C</span> |{" "}
            <a href="/" onClick={convertFarenheit}>
              F
            </a>
          </span>
        </p>
      </>
    );
  } else {
    let farenheit = Math.round((props.temp * 9) / 5 + 32);
    return (
      <>
        <p className="temp">
          {farenheit}°{" "}
          <span className="convert">
            <a href="/" onClick={convertCelsius}>
              C
            </a>{" "}
            | <span>F</span>
          </span>
        </p>
      </>
    );
  }
}

export default ConvertTemp;
