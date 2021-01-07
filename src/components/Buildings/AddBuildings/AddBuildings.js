import React from "react";
import style from "./AddBuilding.module.css";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import {
  required,
  address,
  fullName,
  composeValidators,
  phone,
} from "../../../utils/validations";

const AddBuilding = (props) => {
  const onSubmit = (values) => {
    props.addBuilding(values);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {/* eslint-disable-next-line no-unused-vars */}
        {({ handleSubmit, meta, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="address"
                placeholder="Address"
                validate={composeValidators(required, address)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Address</label>
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
            <div>
              <Field
                name="boilerID"
                placeholder="Boilers ID"
                validate={required}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Boiler ID</label>
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
            <div>
              <Field
                name="fullname"
                placeholder="Name"
                validate={composeValidators(required, fullName)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Name</label>
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
            <div>
              <Field
                name="phone"
                placeholder="Phone"
                validate={composeValidators(required, phone)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Phone</label>
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
          </form>
        )}
      </Form>
    </div>
  );
};

AddBuilding.propTypes = {
  addBuilding: PropTypes.func.isRequired,
};

export default AddBuilding;
