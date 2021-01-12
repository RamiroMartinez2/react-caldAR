import React from 'react';
import {Form, Field} from 'react-final-form';
import { bindActionCreators } from 'redux';
import { loginAction } from "../../redux/actions/authActions";
import { required } from '../../utils/validations';
import style from "./login.module.css";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const Login = (props) => {

  const onSubmit = (values) => {
    props.loginAction(values);
  };

	return(
		<div>
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
                  onClick={loginAction}
                >
                  Confirm
                </button>
                <button
                  className={style.BtnModCancel}
                  onClick={() => props.setOpenModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginAction: loginAction
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);