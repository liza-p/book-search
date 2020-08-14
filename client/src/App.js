import React from 'react';
import axios from 'axios';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact path="/" to="/search" />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
