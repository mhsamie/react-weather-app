import React from "react";
import "./Search.css";

function Search({ changeCity, searchCity, weather }) {
  return (
    <div className="search">
      <form onSubmit={searchCity}>
        <input
          onChange={changeCity}
          type="search"
          placeholder="search any city ..."
        />
        <div className="search-icon">
          <img src="http://bmbgk.ir/assets/images/search.svg" alt="search" />
        </div>
      </form>
    </div>
  );
}

export default Search;
