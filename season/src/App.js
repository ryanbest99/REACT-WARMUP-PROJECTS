import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  state = { lat: null, message: "weather season", error: null };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position.coords.latitude);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log("err :", err.message);
        this.setState({ error: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.error && !this.state.lat) {
      return <h1>Error: {this.state.error}</h1>;
    }

    if (!this.state.error && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat} message={this.state.message} />
      );
    }

    return <Loader />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

class App2 extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    const success = (position) => {
      this.setState({ lat: position.coords.latitude });
    };
    const error = (err) => {
      this.setState({ errorMessage: err.message });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  renderedContent() {
    if (this.state.lat && this.state.errorMessage) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    return <Loader />;
  }

  render() {
    return <div>{this.renderedContent()}</div>;
  }
}

export default App2;
