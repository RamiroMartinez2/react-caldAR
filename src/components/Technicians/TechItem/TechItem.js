import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './TechItem.module.css';
import { BiPencil } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';

const TechItem = (props) => {

  const [isEditing, toggleEditing] = useState(false);
  const [tech, setTech] = useState({...props.tech});

  const cancelClick = () => {
    toggleEditing();
    setTech(props.tech);
  }

  const toggleEdit = () => {
    toggleEditing(!isEditing);
  }

  const onChange = (e) => {
    setTech({...tech, [e.target.name]: e.target.value});
  }
  
  const saveChanges = () => {
    props.updateTechnician(tech);
    toggleEdit();
  }

  if (isEditing){
    return(
      <ul className={style.showForm}>
        <input className={style.inputStyleEdt}
          type="text" 
          name="Number" 
          value={tech._id}
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
          <button onClick={cancelClick} className={style.Btn}><FcCancel /></button>
          <button onClick={saveChanges} className={style.Btn}><AiOutlineCheckCircle/></button>
        </div>
      </ul>
    )
  }
  return (
    <ul className={style.showForm}>
      <li className={style.liStyle}>{ props.tech._id }</li>
      <li className={style.liStyle}>{ props.tech.fullName }</li>
      <li className={style.liStyle}>{ props.tech.email }</li>
      <li className={style.liStyle}>{ props.tech.phone }</li>
      <li className={style.liStyle}>{ props.tech.statusActive }</li>
      <li className={style.liStyle}>{ props.tech.trained }</li>
      <li className={style.liStyle}>{ props.tech.assignedClients }</li>
      <li className={style.liStyle}>{ props.tech.spareHoursAvailable }</li>
      <div>
        <button onClick={() => props.deleteTechnician(props.tech._id)} className={style.Btn}><GoTrashcan/></button>
        <button onClick={toggleEdit} className={style.Btn}><BiPencil/></button> 
      </div>    
    </ul>  
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
  updateTechnician: PropTypes.func.isRequired,
}



export default TechItem;