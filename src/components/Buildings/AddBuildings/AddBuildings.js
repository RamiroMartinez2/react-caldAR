import React, { Component } from "react";
import "./AddBuilding.css";
import PropTypes from "prop-types";

export class AddBuilding extends Component {
  state = {
    address: "",
    boilersId: "",
    fullName: "",
    phone: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBld(this.state);
    this.setState({
      address: "",
      boilersId: "",
      fullName: "",
      phone: "",
    });
  };

  render() {
    return (
      <form className="addForm" onSubmit={this.onSubmit}>
        <input
          className="inputStyle"
          type="text"
          name="address"
          placeholder="Address"
          value={this.state.address}
          onChange={this.onChange}
        ></input>
        <input
          className="inputStyle"
          type="number"
          name="boilersId"
          placeholder="Boiler Type"
          value={this.state.boilersId}
          onChange={this.onChange}
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="fullName"
          placeholder="Name"
          value={this.state.fullName}
          onChange={this.onChange}
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="phone"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.onChange}
        ></input>
        <input className="btnSubmit" type="submit" value="Add New"></input>
      </form>
    );
  }
}

AddBuilding.propTypes = {
  addBld: PropTypes.array.isRequired,
};

export default AddBuilding;
