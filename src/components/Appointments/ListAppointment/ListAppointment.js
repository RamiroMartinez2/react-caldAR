import React, { useState } from "react";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle, AiFillEdit } from "react-icons/ai";
import "./ListAppointment.css";
import { connect } from "react-redux";
import {
  deleteAppointment as delAppointment,
  updateAppointment as updAppoint,
} from "../../../redux/actions/actions";

const ListAppointment = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [appointments, setAppointment] = useState({ ...props.appointments });

  const toggleEdit = () => {
    setAppointment(props.appointments);
    toggleEditing(!isEditing);
  };

  const onChange = (e) => {
    setAppointment({ ...appointments, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updAppoint(appointments);
  };

  if (isEditing) {
    return (
      <ul className="showForm">
        <input
          className="inputStyle"
          type="number"
          name="id"
          placeholder="Id"
          value={appointments.id}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="buildingId"
          placeholder="Building Id"
          value={appointments.buildingId}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="boilerId"
          placeholder="Boiler Id"
          value={appointments.boilerId}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="date"
          name="date"
          placeholder="Date"
          value={appointments.date}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="estimatedTime"
          placeholder="Estimated Time"
          value={appointments.estimatedTime}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="maintenanceType"
          placeholder="Maintenance Type"
          value={appointments.maintenanceType}
          onChange={onChange}
          required
        ></input>
        <div>
          <button onClick={toggleEdit} className="Btn">
            <FcCancel />
          </button>
          <button onClick={saveChanges} className="Btn">
            <AiOutlineCheckCircle />
          </button>
        </div>
      </ul>
    );
  }

  return (
    <div>
      <ul className="showForm">
        <li className="liStyle">{props.appointments.id}</li>
        <li className="liStyle">{props.appointments.buildingId}</li>
        <li className="liStyle">{props.appointments.boilerId}</li>
        <li className="liStyle">{props.appointments.date}</li>
        <li className="liStyle">{props.appointments.estimatedTime}</li>
        <li className="liStyle">{props.appointments.maintenanceType}</li>
        <div>
          <button
            onClick={() => props.delAppointment(props.appointments.id)}
            className="Btn"
          >
            <MdDelete />
          </button>
          <button onClick={toggleEdit} className="Btn">
            <AiFillEdit />
          </button>
        </div>
      </ul>
    </div>
  );
};

ListAppointment.propTypes = {
  appointments: PropTypes.array.isRequired,
  delAppointment: PropTypes.func.isRequired,
  updAppoint: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    delAppointment: (id) => dispatch(delAppointment(id)),
    updAppoint: (content) => dispatch(updAppoint(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    appointment: state.appointment,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAppointment);
