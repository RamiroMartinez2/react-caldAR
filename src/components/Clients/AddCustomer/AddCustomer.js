import React from "react";
import style from "./AddCustomer.module.css";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { required, composeValidators, email } from "../../../utils/validations";

const AddCustomer = (props) => {
  const onSubmit = (values) => {
    props.addCustomer(values);
  };

  return (
    <>
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
                      <span className={style.errorMsg}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="buildings"
                placeholder="Buildings"
                validate={composeValidators(required)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Buildings</label>
                    <input
                      {...input}
                      className={style.inputStyle}
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <span className={style.errorMsg}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="fiscal_address"
                placeholder="Fiscal Adress"
                validate={composeValidators(required)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Fiscal Adress</label>
                    <input
                      {...input}
                      className={style.inputStyle}
                      placeholder={placeholder}
                    />
                    {meta.error && meta.touched && (
                      <span className={style.errorMsg}>{meta.error}</span>
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
          </form>
        )}
      </Form>
    </>
  );
};

AddCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
};

export default AddCustomer;
