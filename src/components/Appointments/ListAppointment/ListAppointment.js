import React, { useState } from "react";
import PropTypes from "prop-types";
import { FcCancel } from "react-icons/fc";
import { GoTrashcan } from "react-icons/go";
import { AiOutlineCheckCircle, AiFillEdit } from "react-icons/ai";
import styles from "./ListAppointment.module.css";


const ListAppointment = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [appointments, setAppointment] = useState({...props.appointments});

  const cancelClick = () => {
    toggleEditing();
    setAppointment(props.appointments)
  }

  const toggleEdit = () => {
    toggleEditing(!isEditing);
  };

  const onChange = (e) => {
    setAppointment({...appointments, [e.target.name]: e.target.value});
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateAppointment(appointments);
  };

  if (isEditing) {
    return (
      <ul className={styles.showForm}>
        <input
          className={styles.inputStyle}
          type="number"
          name="id"
          placeholder="Id"
          value={appointments._id}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyle}
          type="number"
          name="buildingId"
          placeholder="Building Id"
          value={appointments.buildingId}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyle}
          type="number"
          name="boilerId"
          placeholder="Boiler Id"
          value={appointments.boilerId}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.dateStyle}
          type="date"
          name="date"
          placeholder="Date"
          value={appointments.date}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyle}
          type="number"
          name="estimatedTime"
          placeholder="Estimated Time"
          value={appointments.estimatedTime}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyle}
          type="text"
          name="maintenanceType"
          placeholder="Maintenance Type"
          value={appointments.maintenanceType}
          onChange={onChange}
          required
        ></input>
        <div>
          <button onClick={cancelClick} className={styles.Btn}>
            <FcCancel />
          </button>
          <button onClick={saveChanges} className={styles.Btn}>
            <AiOutlineCheckCircle />
          </button>
        </div>
      </ul>
    );
  }

  return (
    <div>
      <ul className="showForm">
        <li className={styles.liStyle}>{props.appointments._id}</li>
        <li className={styles.liStyle}>{props.appointments.buildingId}</li>
        <li className={styles.liStyle}>{props.appointments.boilerId}</li>
        <li className={styles.liStyle}>{props.appointments.date}</li>
        <li className={styles.liStyle}>{props.appointments.estimatedTime}</li>
        <li className={styles.liStyle}>{props.appointments.maintenanceType}</li>
        <div>
          <button
            onClick={() => props.deleteAppointment(props.appointments._id)}
            className={styles.Btn}
          >
            <GoTrashcan />
          </button>
          <button onClick={toggleEdit} className={styles.Btn}>
            <AiFillEdit />
          </button>
        </div>
      </ul>
    </div>
  );
};

ListAppointment.propTypes = {
  appointments: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  updateAppointment: PropTypes.func.isRequired,
};

export default ListAppointment;
