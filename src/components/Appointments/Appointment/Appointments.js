import React from "react";
import ListAppointment from "../ListAppointment/ListAppointment";
import PropTypes from "prop-types";
import styles from "./Appointment.module.css";

const Appointments = (props) => {
  const listAppointment = props.appointments.map((appointments) => (
    <ListAppointment
      key={appointments._id}
      appointments={appointments}
      deleteAppointment={props.deleteAppointment}
      updateAppointment={props.updateAppointment}
    />
  ));
  return (
    <div>
      <ul className={styles.ulStyle}>
        <li className={styles.liStyleHeader}>Id</li>
        <li className={styles.liStyleHeader}>Building Id</li>
        <li className={styles.liStyleHeader}>Boiler Id</li>
        <li className={styles.liStyleHeader}>Date</li>
        <li className={styles.liStyleHeader}>Estimated Time</li>
        <li className={styles.liStyleHeader}>Maintenance Type</li>
        <li className={styles.liStyleHeader}>Actions</li>
      </ul>
      {listAppointment}
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  updateAppointment: PropTypes.func.isRequired,
};

export default Appointments;
