import React, { Component } from "react";
import style from "./AddBoilerType.module.css";
import PropTypes from "prop-types";
export class AddBoilerType extends Component {
  state = {
    skillsId: "",
    description: "",
    stock: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBoilerType(this.state);
    this.setState({
      skillsId: "",
      description: "",
      stock: "",
    });
  };

  render() {
    return (
      <form className={style.addForm} onSubmit={this.onSubmit}>
        <input
          className={style.inputStyle}
          type="text"
          name="skillsId"
          placeholder="Skills ID"
          value={this.state.skillsId}
          onChange={this.onChange}
          required
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onChange}
          required
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="stock"
          placeholder="Stock"
          value={this.state.stock}
          onChange={this.onChange}
          required
        ></input>
        <input
          className={style.btnSubmit}
          type="submit"
          value="Add new Boiler Type"
        ></input>
      </form>
    );
  }
}

AddBoilerType.propTypes = {
  addBoilerType: PropTypes.array.isRequired,
};
export default AddBoilerType;