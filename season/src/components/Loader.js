import React from "react";

const Loader = ({ message }) => {
  return (
    <div className="ui segment loader-box" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{message}</div>
      </div>
      <p></p>
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading...",
};

export default Loader;
