import React from 'react';
import style from './AddTechnician.module.css';
import PropTypes from 'prop-types';
import {Form, Field} from 'react-final-form';
import TextInput from '../../TextInput/TextInput';
import NumberInput from '../../NumberInput/NumberInput';
import {required, email, composeValidators} from '../../../utils/validations';

// const AddTechnician = (props) => {
//   const [technician, setNewTechnician] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     statusActive: '',
//     trained: '',
//     assignedClients: '',
//     spareHoursAvailable: ''
//   });
    
//   const onChange = (e) => setNewTechnician({...technician, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     props.addTechnician({...technician});
//     setNewTechnician({
//       fullName: "",
//       email: "",
//       phone: "",
//       statusActive: "",
//       trained: "",
//       assignedClients: "",
//       spareHoursAvailable: "",
//     });
//   };
const AddTechnician = (props) =>{
  const onSubmitTech = (values) =>{
    console.log(values);
    props.addTechnician (values);
  };

  return (
    <div>
      <Form onSubmit={onSubmitTech}
        initialValues={{fullName: "",
        email: "",
        phone: "",
        statusActive: "",
        trained: "",
        assignedClients: "",
        spareHoursAvailable: "",}}
        // eslint-disable-next-line no-unused-vars
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form className={style.addForm} onSubmit={handleSubmit} >
            <div className= {style.row}>
              <div className={style.inputStyle}>
                <Field 
                  name="fullName"
                  component={TextInput}
                  label="Full Name"
                  placeholder="Add Full Name"
                  validate={required}
                />            
              </div>
              <div className={style.inputStyle}>
                <Field
                  name="email"
                  component={TextInput}
                  label="Email"
                  placeholder="Add Email" 
                  validate={composeValidators(required, email)}
                />
              </div>  
              <div className={style.inputStyle}>
                <Field
                  name="phone"
                  component={NumberInput}
                  label="Phone Numbre"
                  placeholder="Add Phone" 
                />
              </div> 
              <div className={style.inputStyle}>
                <label>Status:</label>
                <Field name="statusActive"
                  component="select"
                  validate={required}> 
                  <option value= "Active">Active</option>
                  <option value= "Inactive">Inactive</option> 
                  
                </Field>
              </div> 
              <div className={style.inputStyle}>
                <Field
                  name="trained"
                  component={TextInput}
                  label="Trained Skills"
                  placeholder="Add Trained Skills" 
                  validate={required}
                />
              </div> 
              <div className={style.inputStyle}>
                <Field
                  name="assignedClients"
                  component={NumberInput}
                  label="Assigned Clients"
                  placeholder="Add Assigned Clients" 
                  validate={required}
                />
              </div> 
              <div className={style.inputStyle}>
                <Field
                  name="spareHoursAvailable"
                  component={NumberInput}
                  label="Spare Hours Available"
                  placeholder="Add Spare Hours" 
                  validate={required}
                />
              </div>
            </div>
            <div>
              <button  type="submit" disabled={submitting || pristine}>Submit</button>
              <button  type="button" onClick={form.reset} disabled={submitting || pristine}>Reset</button>
            </div> 
          </form>
        )}>
      </Form>
    </div>
    
  )
}

AddTechnician.propTypes = {
  addTechnician: PropTypes.func.isRequired,
}

export default AddTechnician;