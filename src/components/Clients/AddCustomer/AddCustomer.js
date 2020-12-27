import React, { Component } from "react";
import styles from "./AddCustomer.module.css";
import PropTypes from "prop-types";

class AddCustomer extends Component {
  state = {
    id: "",
    customerType: "",
    email: "",
    buildings: "",
    fiscal_address: "",
  };

  onChangeCustomer = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmitCustomer = (e) => {
    e.preventDefault();
    this.props.AddCustomer(
      this.state.id,
      this.state.customerType,
      this.state.email,
      this.state.buildings,
      this.state.fiscal_address
    );

    this.setState({
      id: "",
      customerType: "",
      email: "",
      buildings: "",
      fiscal_address: "",
    });
  };

  render() {
    return (
      <>

      <form className={styles.addForm} onSubmit={this.onSubmitCustomer}>
        <input className={styles.inputStyle}
          type="text"
          name="customerType"
          placeholder="Particular or Business"
          defaultValue={this.state.customerType}
          onChange={this.onChangeCustomer}
          required
        />
        <input className={styles.inputStyle}
          type="email"
          name="email"
          placeholder="ramiro@hotmail.com"
          defaultValue={this.state.email}
          onChange={this.onChangeCustomer}
          required
        />
        <input  className={styles.inputStyle}
          type="text"
          name="buildings"
          placeholder="Add how many buildings you have"
          defaultValue={this.state.buildings}
          onChange={this.onChangeCustomer}
          required
        />
        <input className={styles.inputStyle}
          type="text"
          name="fiscal_address"
          placeholder="Cordoba 2020"
          defaultValue={this.state.fiscal_address}
          onChange={this.onChangeCustomer}
          required
        />
        <input className={styles.btnSubmit} type="submit" value="Add new customer" />
      </form>
      </>
    )
  }
}

AddCustomer.propTypes = {
  AddCustomer: PropTypes.object.isRequired,
  
};

export default AddCustomer;

