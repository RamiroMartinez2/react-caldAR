/* eslint react/prop-types: 0 */
import React from 'react';
import style from './AddTechnician.module.css';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';
import {required,
        composeValidators,
        email,
        phone,
        clients,
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
          <form className={style.formStyle} onSubmit={handleSubmit}>
            <div className={style.columnfile}>
              <div className={style.columnA}>
                <div className={style.lineGroup}>
                  <Field name="fullName" placeholder="Full Name" validate = {required}>
                    {({input,meta,placeholder}) => (
                      <div>
                        <label>Full Name</label>
                        <input {...input} className={style.inputStyle} placeholder={placeholder} />
                        {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                      </div>
                    )}
                  </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="email" placeholder="Email" validate = {composeValidators(required,email)}>
                      {({input,meta,placeholder}) => (
                        <div>
                          <label>Email</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                      </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="phone" placeholder="Phone" validate = {composeValidators(required,phone)}>
                      {({input,meta,placeholder}) => (
                        <div>
                          <label>Phone</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                      </Field>
                </div>
                <div>
                  <label>Status</label>
                  <Field name="statusActive" component="select">
                    <option>-</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    </Field>
                </div>
              </div>
              <div className={style.columnB}>
                <div className={style.lineGroup}>
                    <Field name="trained" placeholder="Trained Skills" validate = {required}>
                      {({input,meta,placeholder}) => (
                        <div>
                          <label>Trained Skills</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                      </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="assignedClients" placeholder="Assigned Clients" validate = {composeValidators(required,clients)}>
                      {({input,meta,placeholder}) => (
                        <div>
                          <label>Assigned Clients</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                      </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="spareHoursAvailable" placeholder="Hours Available" validate = {composeValidators(required,hours)}>
                      {({input,meta,placeholder}) => (
                        <div>
                          <label>Hours Available</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                      </Field>
                  </div>
                <button type="submit" className={style.btnSubmit} disabled={submitting}>Submit</button>
                <button  onClick={() => props.setOpenModal(false)} className={style.btnSubmitCancel} >Cancel</button>
              </div>             
            </div>
          </form>
        )}
      </Form>
    </div>
  )}

AddTechnician.propTypes = {
  addTechnician: PropTypes.func.isRequired,
}

export default AddTechnician;