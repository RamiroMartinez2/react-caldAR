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
    toggleEditing();
    props.updAppoint(appointments);
  };

  if (isEditing) {
    return (
      <ul>
        <input
          className="inputStyle"
          type="number"
          name="id"
          placeholder="Id"
          defaultValue={appointments.id}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="buildingId"
          placeholder="Building Id"
          defaultValue={appointments.buildingId}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="boilerId"
          placeholder="Boiler Id"
          defaultValue={appointments.boilerId}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="date"
          name="date"
          placeholder="Date"
          defaultValue={appointments.date}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="estimatedTime"
          placeholder="Estimated Time"
          defaultValue={appointments.estimatedTime}
          onChange={onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="maintenanceType"
          placeholder="Maintenance Type"
          defaultValue={appointments.maintenanceType}
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
  appointments: PropTypes.object.isRequired,
  delAppointment: PropTypes.array.isRequired,
  updAppoint: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    delAppointment: (number) => dispatch(delAppointment(number)),
    updAppoint: (content) => dispatch(updAppoint(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAppointment);
