/* eslint react/prop-types: 0 */
import React from 'react';
import style from './AddBoilerType.module.css';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';
import {required,
  composeValidators,
  skill,
  stock,} from '../../../utils/validations';

const AddBoilerType = (props) => {

  const onSubmit = (values) => {
    props.addBoilerType(values);
    props.setOpenModal(false)
  };

  return(
    <div className={style.addForm}>
      <Form onSubmit={onSubmit}>
      {/* eslint-disable-next-line no-unused-vars */}
        {({handleSubmit,meta,  values, submitting}) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="skillsId" placeholder="Skills ID" validate = {composeValidators(required,skill)}>
                {({input,meta,placeholder}) => (
                  <div className={style.lineGroup}>
                    <label>Skills ID</label>
                    <input {...input} className={style.inputStyle} placeholder={placeholder} />
                    {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
              <div >
                <label>Descriptions</label>
                <Field className={style.slection} name="descriptions" component="select">
                  <option>-</option>
                  <option>Orange</option>
                  <option>Turquoise</option>
                  <option>Pink</option>
                  <option>Puce</option>
                </Field>
              </div>
              <div className={style.lineGroup}>
                <Field name="stock" placeholder="Stock" validate = {composeValidators(required,stock)}>
                  {({input,meta,placeholder}) => (
                    <div>
                      <label>Stock</label>
                      <input {...input} className={style.inputStyle} placeholder={placeholder} />
                      {meta.error && meta.touched && <span className={style.errorMsg}>{meta.error}</span>}
                    </div>
                  )}
                  </Field>
              </div>
            <button type="submit" className={style.btnSubmit} disabled={submitting}>Submit</button>
            <button  onClick={() => props.setOpenModal(false)} className={style.btnCancel} >Cancel</button>
          </form>
        )}
      </Form>
    </div>
  )}

AddBoilerType.propTypes = {
  addBoilerType: PropTypes.func.isRequired,
}

export default AddBoilerType;