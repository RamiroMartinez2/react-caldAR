import React, { Component } from "react";
import ListAppointment from "../ListAppointment/ListAppointment";
import PropTypes from "prop-types";
import style from"./Appointment.module.css";

class Appointments extends Component {
  render() {
    return (
      <div>
        <ul className={style.ulStyle}>
          <li className={style.liStyleHeader}>Id</li>
          <li className={style.liStyleHeader}>Building Id</li>
          <li className={style.liStyleHeader}>Boiler Id</li>
          <li className={style.liStyleHeader}>Date</li>
          <li className={style.liStyleHeader}>Estimated Time</li>
          <li className={style.liStyleHeader}>Maintenance Type</li>
          <li className={style.liStyleHeader}>Actions</li>
        </ul>
        {this.props.appointments.map((appointments) => (
          <ListAppointment
            key={appointments.id}
            appointments={appointments}
            updateAppointment={this.props.updateAppointment}
            delAppointment={this.props.delAppointment}
          />
        ))}
      </div>
    );
  }
}

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  updateAppointment: PropTypes.array.isRequired,
  delAppointment: PropTypes.array.isRequired,
};

export default Appointments;
