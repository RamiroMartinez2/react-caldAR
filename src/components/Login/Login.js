import React from 'react';
import {Form, Field} from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from "../../redux/actions/authActions";
import { required } from '../../utils/validations'
import styles from "./login.module.css"

const Login = ({login}) => {

  const onSubmitLogin = (values) => {
	  login(values);
  };

	return(
		<div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h1>LOG IN</h1>
          <Form 
            onSubmit={onSubmitLogin}
            render={({ handleSubmit, form, submitting, pristine, values}) => (
              <form onSubmit={handleSubmit}>
                <div className={styles.inputLgn}>
                  <Field 
                    name='email'
                    type="text"
                    placeholder="Email"
                    label="Email"
                    validate={required}
                  />
                </div>
                <div className={styles.inputLgn}>
                  <Field 
                    name='password'
                    type="password"
                    placeholder="Password"
                    label="Password"
                    validate={required}
                  />
                </div>
                <div className={styles.buttonLgn}>
                  <Button disabled={submitting || pristine} primary btnLabel="Login" type="submit" />
                </div>
              </form>
            )}  
          />
      </div>
    </div>
	);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: loginAction
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);