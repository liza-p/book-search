<<<<<<< HEAD
import React, { Component } from "react";
=======
import React from 'react';
>>>>>>> 1683f7b6d88beaec506cf8b5ea6d98247b4010f1
import axios from 'axios';
import Search from "./pages/Search"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Search/>
      <Switch>
      <Route exact path="/" component={Search} />
      </Switch>
=======
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </div>
>>>>>>> 1683f7b6d88beaec506cf8b5ea6d98247b4010f1
    </Router>
  );
}

export default App;
