import React, { useState } from "react";
import styles from "./AddCustomer.module.css";
import PropTypes from "prop-types";

const AddCustomer = (props) => {
  const [customer, setNewCustomer] = useState({
    customerType: "",
    email: "",
    buildings: "",
    fiscal_address: "",
  });

  const onChange = (e) =>
    setNewCustomer({ ...customer, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addCustomer({ ...customer });
    setNewCustomer({
      customerType: "",
      email: "",
      buildings: "",
      fiscal_address: "",
    });
  };

  return (
    <>
      <form className={styles.addForm} onSubmit={onSubmit}>
        <input
          className={styles.inputStyle}
          type="text"
          name="customerType"
          placeholder="Particular or Business"
          value={customer.customerType}
          onChange={onChange}
          required
        />
        <input
          className={styles.inputStyle}
          type="email"
          name="email"
          placeholder="Add your email"
          value={customer.email}
          onChange={onChange}
          required
        />

        <input
          className={styles.inputStyle}
          type="number"
          name="buildings"
          placeholder="Add how many buildings you have"
          value={customer.buildings}
          onChange={onChange}
          required
        />
        <input
          className={styles.inputStyle}
          type="text"
          name="fiscal_address"
          placeholder="Add your address"
          value={customer.fiscal_address}
          onChange={onChange}
          required
        />

        <input
          className={styles.btnSubmit}
          type="submit"
          value="Add new customer"
        />
      </form>
    </>
  );
};

AddCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
};

export default AddCustomer;
