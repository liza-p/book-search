import React from 'react';
import axios from 'axios';
import Search from "./pages/Search"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
