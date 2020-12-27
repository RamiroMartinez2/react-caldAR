import React from "react";
import AddCustomer from "../AddCustomer/AddCustomer";
import Customers from "../Customers/Customers";
import HeaderCustomer from "../HeaderCustomer/HeaderCustomer";
import styles from "./MainCustomer.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const MainCustomer = (props) => {
  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        {" "}
        <HeaderCustomer />
        <Customers customers={props.customers} />
        <AddCustomer />
      </div>
    </div>
  );
};

MainCustomer.propTypes = {
  customers: PropTypes.array.isRequired,
};

const mapStateToProps = ({ customers }) => {
  return { customers };
};

export default connect(mapStateToProps)(MainCustomer);
 