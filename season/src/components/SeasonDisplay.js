import React from "react";

const seasonConfig = {
  summer: {
    weatherIcon: "sunny",
    weatherMessage: "It's too hot",
  },
  winter: {
    weatherIcon: "winter",
    weatherMessage: "It's too cold",
  },
};

const getSeason = ({ lat }) => {
  const month = new Date().getMonth();
  console.log(month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat);
  console.log(season);

  const { weatherIcon, weatherMessage } = seasonConfig[season];
  console.log(weatherIcon, weatherMessage);

  return (
    <div>
      <h1>weatherIcon: {weatherIcon}</h1>
      <h1>weatherMessage: {weatherMessage}</h1>
    </div>
  );
};

export default SeasonDisplay;
