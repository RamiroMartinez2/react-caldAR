import React, { Component } from "react";
import "./ListBuildings.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

export class ListBuildings extends Component {
  state = { ...this.props.bld, isEditing: false };

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
    const { id } = this.props.list;
    if (this.state.isEditing) {
      return (
        <ul style={this.ulStyle()}>
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
        <ul style={this.ulStyle()}>
          <li style={this.liStyle()}>{this.props.list.id}</li>
          <li style={this.liStyle()}>{this.props.list.address}</li>
          <li style={this.liStyle()}>{this.props.list.boilersId}</li>
          <li style={this.liStyle()}>{this.props.list.fullName}</li>
          <li style={this.liStyle()}>{this.props.list.phone}</li>
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

export default ListBuildings;
