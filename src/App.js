import axios from "axios";
import React, { useState } from "react";
import DispalyWeather from "./components/display-weather";
import Search from "./components/SearchEngin";
import WeatherForcast from "./components/Forcast";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [forcast, setForcast] = useState([]);

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    setWeather(null);
  }

  function searchCity(event) {
   
    event.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> 7927e80bb5e27ad1f7ffb1f3ccf5d698a55ce343
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ef53446dcb07ea2a0fb8ef5e317e310&units=metric`;

    axios.get(apiUrl).then((response) => {
      if (response.status === 200) {
        const result = response.data;
        setWeather({
          temperature: Math.round(result.main.temp),
          wind: result.wind.speed,
          humidity: result.main.humidity,
          icon: result.weather[0].icon,
          description: result.weather[0].description,
          cityName: result.name,
          cordinate: result.coord,
          thedate: new Date(result.dt * 1000),
        });
        getForcast(result.coord);
      }
    });
   
  }

  const getForcast = (coord) => {
    const apiKey = "2d35b2ada741444a16992394a8f095ad";
    const longitude = coord.lon;
    const latitude = coord.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      if (response.status === 200) {
        setForcast(response.data.daily);
      }
    });
  };

  return (
    <div className="parent">
      <Search
        changeCity={changeCity}
        searchCity={searchCity}
        weather={weather}
      />
      <DispalyWeather weather={weather} />
      <WeatherForcast weather={weather} forcast={forcast} size="30" />

      {/* just background */}
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/791/original/O9FG4R0-removebg-preview.png?1646744581"
        alt="pic"
      />
    </div>
  );
}

export default App;
