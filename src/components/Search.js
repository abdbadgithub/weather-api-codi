import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
      <div>
        {this.state.input}
        <input type="text" id="input-name" placeholder="London" />
        <button
          onClick={(event) => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
