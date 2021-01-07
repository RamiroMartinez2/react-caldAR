/* eslint react/prop-types: 0 */
import React from 'react';
import style from './AddTechnician.module.css';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';
import {required,
        composeValidators,
        email,
        phone,
        hours} from '../../../utils/validations';

const AddTechnician = (props) => {

  const onSubmit = (values) => {
    props.addTechnician(values);
    props.setOpenModal(false);
  };

  return(
    <div>
      <Form onSubmit={onSubmit}>
      {/* eslint-disable-next-line no-unused-vars */}
        {({handleSubmit,meta,  values, submitting}) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="fullName" placeholder="Full Name" validate = {composeValidators(required)}>
                {({input,meta,placeholder}) => (
                  <div >
                    <label>Full Name</label>
                    <input {...input} className={style.inputStyle} placeholder={placeholder} />
                    {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
              <div>
                <Field name="email" placeholder="Email" validate = {composeValidators(required,email)}>
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Email</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="phone" placeholder="Phone" validate = {composeValidators(required,phone)}>
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Phone</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <label>Status</label>
                <Field name="statusActive" component="select">
                  <option>-</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  </Field>
              </div>
              <div >
                <Field name="trained" placeholder="Trained Skills" validate = {required}>
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Trained Skills</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="assignedClients" placeholder="Assigned Clients" validate = {required}>
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Assigned Clients</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="spareHoursAvailable" placeholder="Hours Available" validate = {composeValidators(required,hours)}>
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Hours Available</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <button type="submit" className={style.btnSubmit} disabled={submitting}>Submit</button>
              <button  onClick={() => props.setOpenModal(false)} className={style.btnSubmit} >Cancel</button>
          </form>
        )}
      </Form>
    </div>
  )}

AddTechnician.propTypes = {
  addTechnician: PropTypes.func.isRequired,
}

export default AddTechnician;