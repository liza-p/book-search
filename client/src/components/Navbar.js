import React from "react";
import { Link } from "react-router-dom";


function Navbar({ children, page }) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="https://books.google.com/"><span className="text-primary">G</span><span className="text-danger">o</span><span className="text-warning">o</span><span className="text-primary">g</span><span className="text-success">l</span><span className="text-danger">e</span> <span  className="text-primary"> Books</span></a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className={`nav-item ${page === 'search' ? 'active' : ''}`}>
        <Link className="nav-link" to="/">Search <span className="sr-only">(current)</span></Link>
      </li>
      <li className={`nav-item ${page === 'saved' ? 'active' : ''}`}>
        <Link className="nav-link" to="/saved">Saved</Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;