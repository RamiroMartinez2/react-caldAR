import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Item.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

export class Item extends Component {
  state = {
    ...this.props.customer,
    isEditing: false,
  };

  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  saveChanges = () => {
    this.toggleEditing();
    this.props.updateCustomer(this.state);
  };

  onChangeCustomer = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const { id } = this.props.customer;

    if (this.state.isEditing) {
      return (
        <ul className="u-list">
          <input
            className="inputStyleEdt"
            type="text"
            name="id"
            placeholder="Add a valid ID"
            defaultValue={this.state.id}
            onChange={this.onChangeCustomer}
            required
            readOnly
          />
          <input
            className="inputStyleEdt"
            type="text"
            name="customerType"
            placeholder="Particular or Business"
            defaultValue={this.state.customerType}
            onChange={this.onChangeCustomer}
            required
          />
          <input
            className="inputStyleEdt"
            type="email"
            name="email"
            placeholder="ramiro@hotmail.com"
            defaultValue={this.state.email}
            onChange={this.onChangeCustomer}
            required
          />
          <input
            className="inputStyleEdt"
            type="text"
            name="buildings"
            placeholder="Add how many buildings you have"
            defaultValue={this.state.buildings}
            onChange={this.onChangeCustomer}
            required
          />
          <input
            className="inputStyleEdt"
            type="text"
            name="fiscal_address"
            placeholder="Cordoba 2020"
            defaultValue={this.state.fiscal_address}
            onChange={this.onChangeCustomer}
            required
          />
          <div>
            <button className="btn" type="submit" onClick={this.saveChanges}>
              <AiOutlineCheckCircle />
            </button>
            <button className="btn" onClick={this.toggleEditing}>
              <FcCancel />
            </button>
          </div>
        </ul>
      );
    }

    return (
      <>
        <ul className="u-list">
          <li className="list">{this.props.customer.id}</li>
          <li className="list">{this.props.customer.customerType}</li>
          <li className="list">{this.props.customer.email}</li>
          <li className="list">{this.props.customer.buildings}</li>
          <li className="list">{this.props.customer.fiscal_address}</li>
          <div>
            <button className="btn" onClick={this.toggleEditing.bind(this, id)}>
              <BiPencil />
            </button>
            <button
              className="btn"
              onClick={this.props.delCustomer.bind(this, id)}
            >
              <GoTrashcan />
            </button>
          </div>
        </ul>
      </>
    );
  }
}

Item.propTypes = {
  customer: PropTypes.object.isRequired,
  delCustomer: PropTypes.array.isRequired,
  updateCustomer: PropTypes.array.isRequired,
};

export default Item;