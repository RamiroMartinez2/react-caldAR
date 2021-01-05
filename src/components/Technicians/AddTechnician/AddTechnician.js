/* eslint react/prop-types: 0 */
import React, {useState} from 'react';
import style from './AddTechnician.module.css';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';

const AddTechnician = (props) => {
  const [setNewTechnician] = useState({
    fullName: '',
    email: '',
    phone: '',
    statusActive: '',
    trained: '',
    assignedClients: '',
    spareHoursAvailable: ''
  });

  const required = value => (value ? undefined : 'Required');
  const onSubmit = (values) => {
    props.addTechnician(values);
     setNewTechnician({
       fullName: "",
       email: "",
       phone: "",
       statusActive: "",
       trained: "",
       assignedClients: "",
       spareHoursAvailable: "",
     });
  };

  return(
    <div>
      <Form onSubmit={onSubmit}>
      {/* eslint-disable-next-line no-unused-vars */}
        {({handleSubmit,meta,  values, submitting}) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="fullName" placeholder="Full Name" validate = {required}>
                {({input,meta,placeholder}) => (
                  <div >
                    <label>Full Name</label>
                    <input {...input} className={style.inputStyle} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
              <div>
                <Field name="email" placeholder="Email" validate = {required}>
                  {/* eslint-disable-next-line no-unused-vars */}
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Email</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="phone" placeholder="Phone" validate = {required}>
                  {/* eslint-disable-next-line no-unused-vars */}
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Phone</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="statusActive" placeholder="Status" validate = {required}>
                  {/* eslint-disable-next-line no-unused-vars */}
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Status</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="trained" placeholder="Trained Skills" validate = {required}>
                  {/* eslint-disable-next-line no-unused-vars */}
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Trained Skills</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="assignedClients" placeholder="Assigned Clients" validate = {required}>
                  {/* eslint-disable-next-line no-unused-vars */}
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Assigned Clients</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
              <div >
                <Field name="spareHoursAvailable" placeholder="Hours Available" validate = {required}>
                  {/* eslint-disable-next-line no-unused-vars */}
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Hours Available</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
            <button type="submit" className={style.btnSubmit} disabled={submitting}>Submit</button>
          </form>
        )}
      </Form>
    </div>
  )}

AddTechnician.propTypes = {
  addTechnician: PropTypes.func.isRequired,
}

export default AddTechnician;