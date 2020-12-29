import React, { useState } from "react";
import "./AddAppointment.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAppointment as addAppointAction } from "../../../redux/actions/actions";

const AddAppointment = (props) => {
  const [appointment, setNewAppointment] = useState({
    id: "",
    buildingId: "",
    boilerId: "",
    date: "",
    estimatedTime: "",
    maintenanceType: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addAppointAction(appointment);

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
    setNewAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="inputStyle"
        type="number"
        name="id"
        placeholder="Id"
        defaultValue={appointment.id}
        onChange={onChange}
        required
      ></input>
      <input
        className="inputStyle"
        type="number"
        name="buildingId"
        placeholder="Building Id"
        defaultValue={appointment.buildingId}
        onChange={onChange}
        required
      ></input>
      <input
        className="inputStyle"
        type="number"
        name="boilerId"
        placeholder="Boiler Id"
        defaultValue={appointment.boilerId}
        onChange={onChange}
        required
      ></input>
      <input
        className="dateStyle"
        type="date"
        name="date"
        placeholder="Date"
        defaultValue={appointment.date}
        onChange={onChange}
        required
      ></input>
      <input
        className="inputStyle"
        type="number"
        name="estimatedTime"
        placeholder="Estimated Time"
        defaultValue={appointment.estimatedTime}
        onChange={onChange}
        required
      ></input>
      <input
        className="inputStyle"
        type="text"
        name="maintenanceType"
        placeholder="Maintenance Type"
        defaultValue={appointment.maintenanceType}
        onChange={onChange}
        required
      ></input>
      <input
        className="btnSubmit"
        type="submit"
        value="Add Appointment"
      ></input>
    </form>
  );
};

AddAppointment.propTypes = {
  addAppointAction: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAppoint: (content) => dispatch(addAppointAction(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    appointment: state.appointments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAppointment);
