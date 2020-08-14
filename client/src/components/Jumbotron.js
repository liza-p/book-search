import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center"}}
      className="jumbotron border border-dark"
    >
      {children}
      <h1> Google Books Search</h1>
      <h2>Search for and Save Books of Interest</h2>

    </div>
  );
}

export default Jumbotron;