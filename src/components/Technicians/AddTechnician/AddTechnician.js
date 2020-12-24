import React, { Component } from "react";
import "./AddTechnician.css";
import PropTypes from "prop-types";
export class AddTechnician extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    statusActive: "",
    trained: "",
    assignedClients: "",
    spareHoursAvailable: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTech(this.state);
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      statusActive: "",
      trained: "",
      assignedClients: "",
      spareHoursAvailable: "",
    });
  };

  render() {
    return (
      <form className="addForm" onSubmit={this.onSubmit}>
        <input
          className="inputStyle"
          type="text"
          name="fullName"
          placeholder=" Add Name"
          value={this.state.fullName}
          onChange={this.onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="email"
          name="email"
          placeholder=" Add Email"
          value={this.state.email}
          onChange={this.onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="phone"
          placeholder=" Add Phone"
          value={this.state.phone}
          onChange={this.onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="statusActive"
          placeholder=" Add Status"
          value={this.state.statusActive}
          onChange={this.onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="trained"
          placeholder=" Add Trained Skills"
          value={this.state.trained}
          onChange={this.onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="assignedClients"
          placeholder=" Add Asigned Clients"
          value={this.state.assignedClients}
          onChange={this.onChange}
          required
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="spareHoursAvailable"
          placeholder="Add Spare Hours"
          value={this.state.spareHoursAvailable}
          onChange={this.onChange}
          required
        ></input>
        <input className="btnSubmit" type="submit" value="Add New"></input>
      </form>
    );
  }
}

AddTechnician.propTypes = {
  addTech: PropTypes.array.isRequired,
};
export default AddTechnician;
