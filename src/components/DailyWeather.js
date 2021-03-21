import React, { Component } from "react";
import { render } from "react-dom";

import "./DailyWeather.css";
export class DailyW extends Component {
  render() {
    return (
      <div
        class="daily_item"
        style={{
          color: this.props.color,
          backgroundColor: "#9CCEF4",
          height: "43%",
        }}
      >
        <p id="hour">03:00</p>
        <img id="img_daily" src={require("../img/weather-icons/cloudy.svg")} />
        <p class="temperature_daily">8c</p>
      </div>
    );
  }
}
