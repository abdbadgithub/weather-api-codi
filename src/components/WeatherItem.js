import React, { Component } from "react";
import { render } from "react-dom";

import "./WeatherItem.css";
export default class WeatherItem extends Component {
  render() {
    return <div>Heello</div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div
        style={{
          color: this.props.color,
          backgroundColor: "#9CCEF4",
          height: "50%",
        }}
      >
        <section class="item">
          <img src={require("../img/weather-icons/clear.svg")} />
          <p id="status_weather">overcast clouds</p>
          <p class="temp">
            Temperature <span id="temperature">10c to 11c</span>
          </p>
          <p class="details_temp">
            Himidty <span id="himidty">78%</span> Pressure{" "}
            <span id="pressure">100848</span>
          </p>
        </section>
      </div>
    );
  }
}
