import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Layout/Nav/Nav"
import Main from "./components/Layout/Main/Main";
import "./App.css";
import MainAppointment from "./components/Appointments/MainAppointment/MainAppointment"
import MainBoiler from "./components/Boilers/MainBoiler/MainBoiler";
import MainTechnician from "./components/Technicians/MainTechnician/MainTechnician";
import MainCustomers from "./components/Clients/MainCustomers/MainCustomers";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/customers" component={MainCustomers} />
          <Route path="/boilers" component={MainBoiler} />
          <Route path="/technician" component={MainTechnician} />
          <Route path="/appointments" component={MainAppointment}/>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
