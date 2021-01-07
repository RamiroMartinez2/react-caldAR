import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./TechItem.module.css";
import { BiPencil } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import Modal from "../../Modal/Modal";

const TechItem = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [tech, setTech] = useState({ ...props.tech });
  const [openModal, setOpenModal] = useState(false);

  const cancelClick = () => {
    toggleEditing();
    setTech(props.tech);
    setOpenModal(false)
  };

  const toggleEdit = () => {
    toggleEditing(!isEditing);
    setOpenModal(true);
  };

  const onChange = (e) => {
    setTech({ ...tech, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    props.updateTechnician(tech);
    toggleEdit();
  };

  if (isEditing) {
    return (
      <Modal title="Editing Technician" openModal={openModal} setOpenModal={setOpenModal}>
        <ul className={style.showForm}>
          <div>
          <label>ID</label>
          <input
            className={style.inputStyleEdt}
            type="text"
            name="Number"
            value={tech._id}
            readOnly
          ></input>
          </div>
          <div>
          <label>Full Name</label>
          <input
            className={style.inputStyleEdt}
            type="text"
            name="fullName"
            placeholder=" Add Name"
            value={tech.fullName}
            onChange={onChange}
          ></input>
          </div>
          <div>
          <label>Email</label>
          <input
            className={style.inputStyleEdt}
            type="email"
            name="email"
            placeholder=" Add Email"
            value={tech.email}
            onChange={onChange}
          ></input>
          </div>
          <div>
          <label>Phone</label>
          <input
            className={style.inputStyleEdt}
            type="number"
            name="phone"
            placeholder=" Add Phone"
            value={tech.phone}
            onChange={onChange}
          ></input>
          </div>
          <div>
          <label>Status</label>
          <input
            className={style.inputStyleEdt}
            type="text"
            name="statusActive"
            placeholder=" Add Status"
            value={tech.statusActive}
            onChange={onChange}
          ></input>
          </div>
          <div>
          <label>Trained Skills</label>
          <input
            className={style.inputStyleEdt}
            type="text"
            name="trained"
            placeholder=" Add Trained Skills"
            value={tech.trained}
            onChange={onChange}
          ></input>
          </div>
          <div>
          <label>Assigned Clients</label>
          <input
            className={style.inputStyleEdt}
            type="number"
            name="assignedClients"
            placeholder=" Add Assigned Clients"
            value={tech.assignedClients}
            onChange={onChange}
          ></input>
          </div>
          <div>
          <label>Hours Available</label>
          <input
            className={style.inputStyleEdt}
            type="number"
            name="spareHoursAvailable"
            placeholder=" Add Spare Hours Available"
            value={tech.spareHoursAvailable}
            onChange={onChange}
          ></input>
          </div>     
        <div className={style.groupModal}>
          <button onClick={saveChanges} className={style.BtnModCheck}>Accept</button>
          <button onClick={cancelClick} className={style.BtnModCancel}>Cancel</button>
        </div>
      </ul>
      </Modal>
    );
  }
  return (
    <ul className={style.showForm}>
      <li className={style.liStyle}>{props.tech._id}</li>
      <li className={style.liStyle}>{props.tech.fullName}</li>
      <li className={style.liStyle}>{props.tech.email}</li>
      <li className={style.liStyle}>{props.tech.phone}</li>
      <li className={style.liStyle}>{props.tech.statusActive}</li>
      <li className={style.liStyle}>{props.tech.trained}</li>
      <li className={style.liStyle}>{props.tech.assignedClients}</li>
      <li className={style.liStyle}>{props.tech.spareHoursAvailable}</li>
      <div>
      <button onClick={toggleEdit} className={style.Btn}><BiPencil/></button>
      <button className={style.Btn} onClick={() => setOpenModal(true)}><GoTrashcan /></button>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <p className={style.msgConfirm}>Are you sure you want to delete ?</p>
          <button className={style.btnSubmit} onClick={() => props.deleteTechnician(props.tech._id)}>{" "}Confirm{" "}</button>
          <button className={style.btnSubmit} onClick={() => setOpenModal(false)}>{" "}Cancel{" "}</button>
        </Modal>
      </div>
    </ul>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
  updateTechnician: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default TechItem;