import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./ListAppointment.css";

class ListAppointment extends Component {
  state = { ...this.props.appointments, isEditing: false };
  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveChanges = () => {
    this.toggleEditing();
    this.props.updateAppointment(this.state);
  };

  render() {
    const { id } = this.props.appointments;
    if (this.state.isEditing) {
      return (
        <ul onSubmit={this.onSubmit}>
          <input
            className="inputStyle"
            type="number"
            name="id"
            placeholder="Id"
            value={this.state.id}
            onChange={this.onChange}
            required
          ></input>
          <input
            className="inputStyle"
            type="number"
            name="buildingId"
            placeholder="Building Id"
            value={this.state.buildingId}
            onChange={this.onChange}
            required
          ></input>
          <input
            className="inputStyle"
            type="number"
            name="boilerId"
            placeholder="Boiler Id"
            value={this.state.boilerId}
            onChange={this.onChange}
            required
          ></input>
          <input
            className="inputStyle"
            type="date"
            name="date"
            placeholder="Date"
            value={this.state.date}
            onChange={this.onChange}
            required
          ></input>
          <input
            className="inputStyle"
            type="number"
            name="estimatedTime"
            placeholder="Estimated Time"
            value={this.state.estimatedTime}
            onChange={this.onChange}
            required
          ></input>
          <input
            className="inputStyle"
            type="text"
            name="maintenanceType"
            placeholder="Maintenance Type"
            value={this.state.maintenanceType}
            onChange={this.onChange}
            required
          ></input>
          <div>
            <button onClick={this.toggleEditing} className="Btn">
              <FcCancel />
            </button>
            <button onClick={this.saveChanges} className="Btn">
              <AiOutlineCheckCircle />
            </button>
          </div>
        </ul>
      );
    }

    return (
      <div>
        <ul className="showForm">
          <li className="liStyle">{this.props.appointments.id}</li>
          <li className="liStyle">{this.props.appointments.buildingId}</li>
          <li className="liStyle">{this.props.appointments.boilerId}</li>
          <li className="liStyle">{this.props.appointments.date}</li>
          <li className="liStyle">{this.props.appointments.estimatedTime}</li>
          <li className="liStyle">{this.props.appointments.maintenanceType}</li>
          <div>
            <button
              onClick={this.props.delAppointment.bind(this, id)}
              className="Btn"
            >
              <MdDelete />
            </button>
            <button onClick={this.toggleEditing} className="Btn">
              <AiFillEdit />
            </button>
          </div>
        </ul>
      </div>
    );
  }
}

ListAppointment.propTypes = {
  appointments: PropTypes.object.isRequired,
  delAppointment: PropTypes.array.isRequired,
  updateAppointment: PropTypes.array.isRequired,
};

export default ListAppointment;
