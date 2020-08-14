import React from 'react';
import axios from 'axios';
import Search from "./pages/Search"
import { BrowserRouter as Route, Switch, Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
