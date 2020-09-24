import React from 'react';

import { observableService } from './services';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      airPressure: "",
      humidity: ""
    };
  }

  componentDidMount() {
    this.temperature = observableService.temperature.subscribe((x, y) => {
      console.log("1", x);
      this.setState({ temperature: x });
    });
    this.airPressure = observableService.airPressure.subscribe((x, y) => {
      console.log("1", x);
      this.setState({ airPressure: x });
    });
    this.humidity = observableService.humidity.subscribe((x, y) => {
      console.log("1", x);
      this.setState({ humidity: x });
    });
  }

  componentWillUnmount() {
    // unsubscribe to ensure no memory leaks
    this.temperature.unsubscribe();
    this.airPressure.unsubscribe();
    this.humidity.unsubscribe();
  }

  render() {
    return (
      <div>
        <div className="title-container">
          <h1>live analytics dashboard</h1>
        </div>
        <div className="data-container">
          <div className="box">
            <h2>Temperature</h2>
            <h3>{this.state.temperature}</h3>
          </div>
          <div className="box">
            <h2>Air Pressure</h2>
            <h3>{this.state.airPressure}</h3>
          </div>
          <div className="box">
            <h2>Humidity</h2>
            <h3>{this.state.humidity}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;