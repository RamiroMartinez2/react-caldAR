import React from "react";
import ListAppointment from "../ListAppointment/ListAppointment";
import PropTypes from "prop-types";
//import style from"./Appointment.module.css";

const Appointments = (props) => {
  const listAppointment = props.appointments.map((appointments) => (
    <ListAppointment key={appointments.id} appointments={appointments} />
  ));
  return (
    <div>
      <ul className="ulStyle">
        <li className="liStyleHeader">Id</li>
        <li className="liStyleHeader">Building Id</li>
        <li className="liStyleHeader">Boiler Id</li>
        <li className="liStyleHeader">Date</li>
        <li className="liStyleHeader">Estimated Time</li>
        <li className="liStyleHeader">Maintenance Type</li>
        <li className="liStyleHeader">Actions</li>
      </ul>
      {listAppointment}
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
};

export default Appointments;
