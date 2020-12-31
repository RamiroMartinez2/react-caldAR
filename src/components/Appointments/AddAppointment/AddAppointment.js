import React, { useState } from "react";
import styles from "./AddAppointment.module.css";
import PropTypes from "prop-types";

const AddAppointment = (props) => {
  const [appointments, setNewAppointment] = useState({
    id: "",
    buildingId: "",
    boilerId: "",
    date: "",
    estimatedTime: "",
    maintenanceType: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addAppointment({...appointments});

    setNewAppointment({
      id: "",
      buildingId: "",
      boilerId: "",
      date: "",
      estimatedTime: "",
      maintenanceType: "",
    });
  };

  const onChange = (e) => {
    setNewAppointment({ ...appointments, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.addForm} onSubmit={onSubmit}>
      <input
        className={styles.inputStyle}
        type="number"
        name="id"
        placeholder="Id"
        defaultValue={appointments.id}
        onChange={onChange}
        required
      ></input>
      <input
        className={styles.inputStyle}
        type="number"
        name="buildingId"
        placeholder="Building Id"
        defaultValue={appointments.buildingId}
        onChange={onChange}
        required
      ></input>
      <input
        className={styles.inputStyle}
        type="number"
        name="boilerId"
        placeholder="Boiler Id"
        defaultValue={appointments.boilerId}
        onChange={onChange}
        required
      ></input>
      <input
        className={styles.dateStyles}
        type="date"
        name="date"
        placeholder="Date"
        defaultValue={appointments.date}
        onChange={onChange}
        required
      ></input>
      <input
        className={styles.inputStyle}
        type="number"
        name="estimatedTime"
        placeholder="Estimated Time"
        defaultValue={appointments.estimatedTime}
        onChange={onChange}
        required
      ></input>
      <input
        className={styles.inputStyle}
        type="text"
        name="maintenanceType"
        placeholder="Maintenance Type"
        defaultValue={appointments.maintenanceType}
        onChange={onChange}
        required
      ></input>
      <input
        className={styles.btnSubmit}
        type="submit"
        value="Add Appointment"
      ></input>
    </form>
  );
};

AddAppointment.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default AddAppointment;
