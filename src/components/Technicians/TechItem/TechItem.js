import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './TechItem.module.css';
import { BiPencil } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { delTech, updateTech } from '../../../redux/actions/technicianAction';

const TechItem = (props) => {

  const [isEditing, toggleEditing] = useState(false);
  const [tech, setTech] = useState({...props.tech});

  const toggleEdit = () => {
    setTech(props.tech);
    toggleEditing(!isEditing);
  }

  const onChange = (e) => {
    setTech({...tech, [e.target.name]: e.target.value});
  }
  
  const saveChanges = () => {
    toggleEdit();
    props.updateTech(tech);
  }

  if (isEditing){
    return(
      <ul className={style.showForm}>
        <input className={style.inputStyleEdt}
          type="text" 
          name="Number" 
          value={tech.number}
          readOnly
        ></input>
        <input className={style.inputStyleEdt}
          type="text" 
          name="fullName" 
          placeholder=" Add Name"
          value={tech.fullName}
          onChange={onChange}
        ></input>
        <input className={style.inputStyleEdt}
          type="email" 
          name="email" 
          placeholder=" Add Email"
          value={tech.email}
          onChange={onChange}
        ></input>
        <input className={style.inputStyleEdt}
          type="number" 
          name="phone" 
          placeholder=" Add Phone"
          value={tech.phone}
          onChange={onChange}
        ></input>
        <input className={style.inputStyleEdt}
          type="text" 
          name="statusActive" 
          placeholder=" Add Status"
          value={tech.statusActive}
          onChange={onChange}
        ></input>
        <input className={style.inputStyleEdt}
          type="text" 
          name="trained" 
          placeholder=" Add Trained Skills"
          value={tech.trained}
          onChange={onChange}
        ></input>
        <input className={style.inputStyleEdt}
          type="number" 
          name="assignedClients" 
          placeholder=" Add Asigned Clients"
          value={tech.assignedClients}
          onChange={onChange}
        ></input>
        <input className={style.inputStyleEdt}
          type="number" 
          name="spareHoursAvailable" 
          placeholder=" Add Spare Hours Available"
          value={tech.spareHoursAvailable}
          onChange={onChange}
        ></input>
        <div>
          <button onClick={toggleEdit} className={style.Btn}><FcCancel /></button>
          <button onClick={saveChanges} className={style.Btn}><AiOutlineCheckCircle/></button>
        </div>
      </ul>
    )
  }
  return (
    <ul className={style.showForm}>
      <li className={style.liStyle}>{ props.tech.number }</li>
      <li className={style.liStyle}>{ props.tech.fullName }</li>
      <li className={style.liStyle}>{ props.tech.email }</li>
      <li className={style.liStyle}>{ props.tech.phone }</li>
      <li className={style.liStyle}>{ props.tech.statusActive }</li>
      <li className={style.liStyle}>{ props.tech.trained }</li>
      <li className={style.liStyle}>{ props.tech.assignedClients }</li>
      <li className={style.liStyle}>{ props.tech.spareHoursAvailable }</li>
      <div>
        <button onClick={() => props.delTech(props.tech.number)} className={style.Btn}><GoTrashcan/></button>
        <button onClick={toggleEdit} className={style.Btn}><BiPencil/></button> 
      </div>    
    </ul>  
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  delTech: PropTypes.func.isRequired,
  updateTech: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    delTech: (number) => dispatch (delTechnician(number)),
    updateTech: (content) => dispatch (updateTechnician(content))
  };
}

const mapStateToProps = state => {
  return{
    technician: state.technicians
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TechItem);