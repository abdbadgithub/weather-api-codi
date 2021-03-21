import React, { Component } from "react";
import Search from "./components/Search";
import Daily, { DailyW } from "./components/DailyWeather";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search handleInput={this.handleInputChange} />

        <SayHello />
        <div class="daily_itmes">
          <DailyW />
          <DailyW />
          <DailyW />

          <DailyW />
          <DailyW />
          <DailyW />
          <DailyW />
        </div>
      </div>
    );
  }
}

export default App;
