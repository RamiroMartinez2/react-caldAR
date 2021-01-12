import React from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";
import styles from "./Customers.module.css";

const Customers = (props) => {
  const items = props.customers.map((customer) => (
    <Item
      key={customer._id}
      customer={customer}
      deleteCustomer={props.deleteCustomer}
      updateCustomer={props.updateCustomer}
    />
  ));

  return (
    <div>
      <ul className={styles.ulStyle}>
        <li className={styles.liStyleHeader}>Id</li>
        <li className={styles.liStyleHeader}>Customer Type</li>
        <li className={styles.liStyleHeader}>Email</li>
        <li className={styles.liStyleHeader}>Buildings</li>
        <li className={styles.liStyleHeader}>Fiscal Address</li>
        <li className={styles.liStyleHeader}>Actions</li>
      </ul>
      {items}
    </div>
  );
};

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
};

export default Customers;
