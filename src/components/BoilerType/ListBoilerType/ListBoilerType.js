import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { BiPencil } from "react-icons/bi"
import style from "./ListBoilerType.module.css";

export class ListBoilerType extends Component {
  state = { ...this.props.list, isEditing: false };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  saveChanges = () => {
    this.toggleEdit();
    this.props.updateBoilerType(this.state);
  };

  render() {
    const { id } = this.props.list;
    if (this.state.isEditing) {
      return (
        <ul className={style.showForm}>
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
            type="text"
            name="skillsId"
            placeholder="Skills ID"
            value={this.state.skillsId}
            onChange={this.onChange}
          ></input>
          <input
            className={style.inputStyle}
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChange}
          ></input>
          <input
            className={style.inputStyle}
            type="text"
            name="stock"
            placeholder="Stock"
            value={this.state.stock}
            onChange={this.onChange}
          ></input>
          <div>
            <button onClick={this.toggleEdit} className={style.Btn}>
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
          <li className={style.liStyle}>{this.props.list.id}</li>
          <li className={style.liStyle}>{this.props.list.skillsId}</li>
          <li className={style.liStyle}>{this.props.list.description}</li>
          <li className={style.liStyle}>{this.props.list.stock}</li>          
          <button onClick={this.toggleEdit} className={style.Btn}>
            <BiPencil />
          </button>
          <button onClick={this.props.delBoilerType.bind(this, id)} className={style.Btn}>
            <GoTrashcan />
          </button>
        </ul>
      </div>
    );
  }
}

ListBoilerType.propTypes = {
  list: PropTypes.object.isRequired,
  delBoilerType: PropTypes.array.isRequired,
  updateBoilerType: PropTypes.array.isRequired,
};
export default ListBoilerType;
