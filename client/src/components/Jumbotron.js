import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 290, textAlign: "center"}}
      className="jumbotron border border-dark"
    >
      {children}
      {/* <h3> (React) Google Books Search</h3> */}
      <h3>Search and Save Books of Interest</h3>

    </div>
  );
}

export default Jumbotron;