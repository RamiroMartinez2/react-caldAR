import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Layout/Nav/Nav';
import Main from './Layout/Main/Main';
import "./App.css";
import MainBoiler from "./components/Boilers/MainBoiler/MainBoiler";
import MainTechnician from './Components/Technicians/MainTechnician/MainTechnician';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/boilers" component={MainBoiler} />
          <Route path="/technician" component={MainTechnician}/>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
