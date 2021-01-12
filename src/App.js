import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { setAuthentication } from './redux/actions/authActions';
import { tokenListener } from './firebase';
import Login from './components/Login/Login'
import Footer from "./components/Layout/Footer/Footer";
import Nav from "./components/Layout/Nav/Nav";
import Main from "./components/Layout/Main/Main";
import MainAppointment from "./components/Appointments/MainAppointment/MainAppointment";
import MainBoiler from "./components/Boilers/MainBoiler/MainBoiler";
import MainTechnician from "./components/Technicians/MainTechnician/MainTechnician";
import MainCustomers from "./components/Clients/MainCustomers/MainCustomers";
import MainBoilerType from "./components/BoilerType/MainBoilerType/MainBoilerType";
import Buildings from "./components/Buildings/Buildings/Buildings";
import Modal from "./components/Modal/Modal";
import style from "./App.module.css";
import PropTypes from "prop-types";

const App = ({
  authenticated,
  setAuthentication
}) => {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthentication();
      setOpenModal(false);
    }
  }, [setAuthentication])

  useEffect(() => {
    tokenListener();
  }, [tokenListener])
  
  const [openModal, setOpenModal] = useState(false);

  if (authenticated) {
    return (
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Switch>
              <Route path="/customers" component={MainCustomers} />
              <Route path="/boilers" component={MainBoiler} />
              <Route path="/technician" component={MainTechnician} />
              <Route path="/appointments" component={MainAppointment} />
              <Route path="/boilersTypes" component={MainBoilerType} />
              <Route path="/buildings" component={Buildings} />
              <Route path="/" exact component={Main} />
              <Redirect exact path="/" to = "/" />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
  return (
    <div>
      <Main />
      <button className={style.newBtn} onClick={() => setOpenModal(true)}>
        Login
      </button>
      <Modal title="Login" openModal={openModal} setOpenModal={setOpenModal}>
        <Login />
      </Modal>
      <Footer />
    </div>
  );
  
  
};

App.propTypes = {
  authenticated: PropTypes.object.isRequired,
  setAuthentication: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setAuthentication
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
