import React from "react";
import style from "./AddAppointment.module.css";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import {required,
        composeValidators,
        number,
        hours} from "../../../utils/appointmentsValidations"

const AddAppointment = (props) => {
  
  const onSubmit = (values) => {
    props.addAppointment(values);
    props.setOpenModal(false);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        {/* eslint-disable-next-line no-unused-vars */}
        {({ handleSubmit, meta, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="buildingId"
                placeholder="Building Id"
                validate={composeValidators(required,number)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Building Id</label>
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
                name="boilerId"
                placeholder="Boiler Id"
                validate={composeValidators(required,number)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Boiler Id</label>
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
                name="date"
                placeholder="Date"
                validate={required}
                component="date"
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Date</label>
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
                name="estimatedTime"
                placeholder="Estimated Time"
                validate={composeValidators(required,hours)}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Estimated Time</label>
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
              <label>Maintenance Type</label>
              <Field className={style.inputSelectStyle} name="maintenanceType" component="select">
                <option></option>
                <option>Regular</option>
                <option>Eventual</option>
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
            onClick={() => props.setOpenModal(false)} className={style.btnSubmitCancel} >Cancel
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

AddAppointment.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default AddAppointment;
