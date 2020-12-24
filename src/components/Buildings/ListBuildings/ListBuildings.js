import React, { Component } from "react";
import "./ListBuildings.css";
import PropTypes from "prop-types";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

export class ListBuildings extends Component {
  state = { ...this.props.Bld, isEditing: false };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveChanges = () => {
    this.toggleEdit();
    this.props.updateBuilding(this.state);
  };

  render() {
    const { id } = this.props.Bld;
    if (this.state.isEditing) {
      return (
        <ul className="showForm">
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
          <div>
            <button onClick={this.toggleEdit} className="Btn">
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
          <li className="liStyle">{this.props.Bld.id}</li>
          <li className="liStyle">{this.props.Bld.address}</li>
          <li className="liStyle">{this.props.Bld.boilersId}</li>
          <li className="liStyle">{this.props.Bld.fullName}</li>
          <li className="liStyle">{this.props.Bld.phone}</li>
          <div>
            <button onClick={this.props.delBld.bind(this, id)} className="Btn">
              <GoTrashcan />
            </button>
            <button onClick={this.toggleEdit} className="Btn">
              <BiPencil />
            </button>
          </div>
        </ul>
      </div>
    );
  }
}

ListBuildings.propTypes = {
  Bld: PropTypes.object.isRequired,
  delBld: PropTypes.array.isRequired,
  updateBuilding: PropTypes.array.isRequired,
};

export default ListBuildings;
