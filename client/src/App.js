import React from 'react';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BookProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <BookProvider>
        <Switch>
          <Redirect exact path="/" to="/search" />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        </BookProvider>
      </div>
    </Router>
  );
}

export default App;
