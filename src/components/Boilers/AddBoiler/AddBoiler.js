/* eslint react/prop-types: 0 */
import React from "react";
import styles from "./AddBoiler.module.css";
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';


const AddBoiler = (props) => {

  const required = value => (value ? undefined : 'Required');
  const onSubmit = (values) => {
    props.addBoiler(values);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
      {/* eslint-disable-next-line no-unused-vars */}
        {({handleSubmit, meta, values, submitting}) => (
          <form onSubmit={handleSubmit}>
            <div >
              <label>Type ID</label>
              <Field name="typeId" component="select" className={styles.inputSelectStyle}>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Field>
              </div>
            <div>
              <Field name="maintaince_rate" placeholder="Maintaince Rate" validate = {required}>
                {({input,meta,placeholder}) => (
                  <div>
                    <label>Maintaince Rate</label>
                    <input {...input} className={styles.inputStyle} placeholder={placeholder} />
                    {meta.error && meta.touched && <span className={styles.errorMsg}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div >
              <Field name="hour_maintaince_cost" placeholder="Hour Maintaince Cost" validate = {required}>
                {({input,meta,placeholder}) => (
                  <div>
                    <label>Hour Maintaince Cost</label>
                    <input {...input} className={styles.inputStyle} placeholder={placeholder} />
                    {meta.error && meta.touched && <span className={styles.errorMsg}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div >
              <Field name="hour_eventual_cost" placeholder="Hour Eventual Cost" validate = {required}>
                {({input,meta,placeholder}) => (
                  <div>
                    <label>Hour Eventual Cost</label>
                    <input {...input} className={styles.inputStyle} placeholder={placeholder} />
                    {meta.error && meta.touched && <span className={styles.errorMsg}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <button type="submit" className={styles.btnSubmit} disabled={submitting}>Submit</button>
          </form>
        )}
      </Form>
    </div>
  )}

AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
}

export default AddBoiler;