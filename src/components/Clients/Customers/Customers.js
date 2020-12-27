import React from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";
import styles from "./Customers.module.css";

<<<<<<< HEAD
const Customers = (props) => {
  const items = props.customers.map((customer) => (
    <Item key={customer.id} customer={customer} />
  ));
=======
class Customers extends Component {
  render() {
    return (
      <>
        <ul className={styles.ulStyle}>
          <li className={styles.liStyleHeader}>Id</li>
          <li className={styles.liStyleHeader}>Customer Type</li>
          <li className={styles.liStyleHeader}>Email</li>
          <li className={styles.liStyleHeader}>Buildings</li>
          <li className={styles.liStyleHeader}>Fiscal Address</li>
        </ul>
>>>>>>> c9ab34d (Add css module)

  return (
    <div>
      <ul className={styles.ulStyle}>
        <li className={styles.liStyleHeader}>Id</li>
        <li className={styles.liStyleHeader}>Customer Type</li>
        <li className={styles.liStyleHeader}>Email</li>
        <li className={styles.liStyleHeader}>Buildings</li>
        <li className={styles.liStyleHeader}>Fiscal Address</li>
      </ul>
      {items}
    </div>
  );
};

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default Customers;
