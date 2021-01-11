import React from "react";
import style from "./AddCustomer.module.css";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import {
  required,
  address,
  email,
  composeValidators,
} from "../../../utils/validations";

const AddCustomer = (props) => {
  const onSubmit = (values) => {
    props.addCustomer(values);
    props.setOpenModal(false);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {/* eslint-disable-next-line no-unused-vars */}
        {({ handleSubmit, meta, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Customer Type</label>
              <Field name="customerType" component="select">
                <option></option>
                <option>Particular</option>
                <option>Business</option>
              </Field>
            </div>
            <div>
              <Field name="buildings" placeholder="Buildings">
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Buildings</label>
                    <input
                      {...input}
                      className={style.inputStyle}
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <span className={style.errorMsg}> {meta.error} </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className={style.lineGroup}>
              <Field
                name="email"
                placeholder="Email"
                validate={composeValidators(required, email)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Email</label>
                    <input
                      {...input}
                      className={style.inputStyle}
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <div className={style.errorDiv}>
                        <span className={style.errorMsg}>{meta.error}</span>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="fiscal_address"
                placeholder="Fiscal Address"
                validate={composeValidators(required, address)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Fiscal Address</label>
                    <input
                      {...input}
                      className={style.inputStyle}
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <span className={style.errorMsg}> {meta.error} </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <button
              type="submit"
              className={style.btnSubmit}
              disabled={submitting}
            >
              Submit
            </button>
            <button
              onClick={() => props.setOpenModal(false)}
              className={style.btnSubmit}
            >
              Cancel
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

AddCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default AddCustomer;
