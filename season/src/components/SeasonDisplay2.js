import React from "react";

const getSeaon = (lat) => {
  const month = new Date().getMonth();
  //   console.log("month: ", month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay2 = ({ lat, message }) => {
  const season = getSeaon(lat);
  console.log(season);

  return (
    <div>
      <h1>lat: {lat}</h1>
      <h1>{season}</h1>
    </div>
  );
};

export default SeasonDisplay2;
