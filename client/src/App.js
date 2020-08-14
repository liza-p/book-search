import React, { Component } from "react";
import axios from 'axios';
import Search from "./pages/Search"
import { BrowserRouter as Route, Switch, Router} from "react-router-dom"


function App() {
  return (
    // <div className="App">
    //   <div className="App-header">
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
    <Router>
      <Switch>
      <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  );
}


export default App;
