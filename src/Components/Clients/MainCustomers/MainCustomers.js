import React, { Component } from "react";
import AddCustomer from "../AddCustomer/AddCustomer";
import Customers from "../Customers/Customers";
import customersBD from "../../../mock/customers-data.json";
import shortid from "shortid";
import HeaderCustomer from "../HeaderCustomer/HeaderCustomer";

export default class MainCustomer extends Component {
  state = {
    customers: customersBD,
  };

  editMode = false;

  delCustomer = (id) => {
    this.setState({
      customers: [
        ...this.state.customers.filter((customer) => customer.id !== id),
      ],
    });
  };

  updateCustomer = (customerUpdated) => {
    this.setState({
      customers: [
        ...this.state.customers.map((customer) => {
          if (customer.id === customerUpdated.id) {
            customer = customerUpdated;
          }
          return customer;
        }),
      ],
    });
  };

  AddCustomer = (id, customerType, email, buildings, fiscal_address) => {
    const newCustomer = {
      id: shortid.generate(),
      customerType,
      email,
      buildings,
      fiscal_address,
    };
    this.setState({
      customers: [...this.state.customers, newCustomer],
    });
  };

  render() {
    return (
      <div>
        <HeaderCustomer/>
        <Customers
          customers={this.state.customers}
          delCustomer={this.delCustomer}
          updateCustomer={this.updateCustomer}
        />
        <AddCustomer AddCustomer={this.AddCustomer} />
      </div>
    );
  }
}