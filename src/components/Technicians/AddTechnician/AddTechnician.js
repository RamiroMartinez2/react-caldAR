import React, {useState} from 'react';
import style from './AddTechnician.module.css';
import PropTypes from 'prop-types';

const AddTechnician = (props) => {
  const [technician, setNewTechnician] = useState({
    fullName: '',
    email: '',
    phone: '',
    statusActive: '',
    trained: '',
    assignedClients: '',
    spareHoursAvailable: ''
  });
    
  const onChange = (e) => setNewTechnician({...technician, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTechnician({...technician});
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

  return (
    <form className={style.addForm} onSubmit={onSubmit} >
      <input className={style.inputStyle}
        type="text" 
        name="fullName" 
        placeholder=" Add Name"
        value={technician.fullName}
        onChange={onChange}
        required
      ></input>
      <input className={style.inputStyle}
        type="email" 
        name="email" 
        placeholder=" Add Email"
        value={technician.email}
        onChange={onChange}
        required
      ></input>
      <input className={style.inputStyle}
        type="number" 
        name="phone" 
        placeholder=" Add Phone"
        value={technician.phone}
        onChange={onChange}
        required
      ></input>
      <input className={style.inputStyle}
        type="text" 
        name="statusActive" 
        placeholder=" Add Status"
        value={technician.statusActive}
        onChange={onChange}
        required
      ></input>
      <input className={style.inputStyle}
        type="text" 
        name="trained" 
        placeholder=" Add Trained Skills"
        value={technician.trained}
        onChange={onChange}
        required
      ></input>
      <input className={style.inputStyle}
        type="number" 
        name="assignedClients" 
        placeholder=" Add Asigned Clients"
        value={technician.assignedClients}
        onChange={onChange}
        required
      ></input>
      <input className={style.inputStyle}
        type="number" 
        name="spareHoursAvailable" 
        placeholder="Add Spare Hours"
        value={technician.spareHoursAvailable}
        onChange={onChange}
        required
      ></input>
      <input className={style.btnSubmit}
        type="submit" 
        value="Add New"
      ></input>
    </form>
  )
  }

AddTechnician.propTypes = {
  addTechnician: PropTypes.func.isRequired,
}

export default AddTechnician;