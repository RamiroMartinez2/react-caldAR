import React, { useEffect } from "react";
import Appointments from "../Appointment/Appointments";
import AddAppointment from "../AddAppointment/AddAppointment";
import Header from "../HeaderAppointment/HeaderAppointment";
import style from "./MainAppointment.module.css"
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MainAppointment = (props) => {
  return (
    <div>
      {" "}
      <Appointments appointments={props.appointments} />
      <AddAppointment />
    </div>
  );
};

MainAppointment.propTypes = {
  appointments: PropTypes.array.isRequired,
};

const mapStateToProps = ({ appointments }) => {
  return { appointments };
};

export default connect(mapStateToProps)(MainAppointment);
