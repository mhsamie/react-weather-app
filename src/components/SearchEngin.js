import React from "react";
import "./Search.css";


function Search({changeCity, searchCity}) {

  return (
    <div className="search">
      <form onSubmit={searchCity}>
        <input
          onChange={changeCity}
          type="search"
          placeholder="search again..."
        />
        <div className="search-icon">
          <img
            src="http://bmbgk.ir/assets/images/search.svg"
            alt="search"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
