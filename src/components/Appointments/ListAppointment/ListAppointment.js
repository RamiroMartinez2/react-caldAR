import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import style from "./ListAppointment.module.css";

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
            className={style.inputStyle}
            type="number"
            name="id"
            placeholder="Id"
            value={this.state.id}
            onChange={this.onChange}
            required
          ></input>
          <input
            className={style.inputStyle}
            type="number"
            name="buildingId"
            placeholder="Building Id"
            value={this.state.buildingId}
            onChange={this.onChange}
            required
          ></input>
          <input
            className={style.inputStyle}
            type="number"
            name="boilerId"
            placeholder="Boiler Id"
            value={this.state.boilerId}
            onChange={this.onChange}
            required
          ></input>
          <input
            className={style.inputStyle}
            type="date"
            name="date"
            placeholder="Date"
            value={this.state.date}
            onChange={this.onChange}
            required
          ></input>
          <input
            className={style.inputStyle}
            type="number"
            name="estimatedTime"
            placeholder="Estimated Time"
            value={this.state.estimatedTime}
            onChange={this.onChange}
            required
          ></input>
          <input
            className={style.inputStyle}
            type="text"
            name="maintenanceType"
            placeholder="Maintenance Type"
            value={this.state.maintenanceType}
            onChange={this.onChange}
            required
          ></input>
          <div>
            <button onClick={this.toggleEditing} className={style.Btn}>
              <FcCancel />
            </button>
            <button onClick={this.saveChanges} className={style.Btn}>
              <AiOutlineCheckCircle />
            </button>
          </div>
        </ul>
      );
    }

    return (
      <div>
        <ul className={style.showForm}>
          <li className={style.liStyle}>{this.props.appointments.id}</li>
          <li className={style.liStyle}>{this.props.appointments.buildingId}</li>
          <li className={style.liStyle}>{this.props.appointments.boilerId}</li>
          <li className={style.liStyle}>{this.props.appointments.date}</li>
          <li className={style.liStyle}>{this.props.appointments.estimatedTime}</li>
          <li className={style.liStyle}>{this.props.appointments.maintenanceType}</li>
          <div>
            <button
              onClick={this.props.delAppointment.bind(this, id)}
              className={style.Btn}
            >
              <GoTrashcan />
            </button>
            <button onClick={this.toggleEditing} className={style.Btn}>
              <BiPencil />
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
