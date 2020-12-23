import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Layout/Nav/Nav";
import Main from "./Layout/Main/Main";
import MainBoiler from "./components/Boilers/MainBoiler/MainBoiler";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/boilers" component={MainBoiler} />
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;