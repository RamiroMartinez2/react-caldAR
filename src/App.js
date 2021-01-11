import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { Form, Field } from "react-final-form";
import { required } from "./utils/validations";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLogged, toggleLogin] = useState(false);

  const toggleLog = () => {
    toggleLogin(!isLogged);
    setOpenModal(false);
  };

  const onSubmit = () => {
    toggleLog();
  };

  if (isLogged) {
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
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form className={style.formStyle} onSubmit={handleSubmit}>
              <div className={style.columnfile}>
                <div className={style.columnA}>
                  <div className={style.lineGroup}>
                    <Field
                      name="username"
                      placeholder="Username"
                      validate={required}
                    >
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Username</label>
                          <input
                            {...input}
                            className={style.inputStyle}
                            placeholder={placeholder}
                          />
                          {meta.error && meta.touched && (
                            <div className={style.errorDiv}>
                              <span className={style.errorMsg}>
                                {meta.error}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field
                      name="password"
                      placeholder="Password"
                      validate={required}
                      type="password"
                    >
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Password</label>
                          <input
                            {...input}
                            className={style.inputStyle}
                            placeholder={placeholder}
                          />
                          {meta.error && meta.touched && (
                            <div className={style.errorDiv}>
                              <span className={style.errorMsg}>
                                {meta.error}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <button
                    className={style.BtnModCheck}
                    type="submit"
                    onClick={toggleLog}
                  >
                    Confirm
                  </button>
                  <button
                    className={style.BtnModCancel}
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </Form>
      </Modal>
      <Footer />
    </div>
  );
  
  
};

export default App;
