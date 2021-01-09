import React, { useEffect } from "react";
import AddCustomer from "../AddCustomer/AddCustomer";
import Customers from "../Customers/Customers";
import HeaderCustomer from "../HeaderCustomer/HeaderCustomer";
import styles from "./MainCustomer.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {
  getCustomers,
  addCustomer,
  deleteCustomer,
  editCustomer,
} from "../../../redux/actions/customerAction";

const MainCustomers = (props) => {
  useEffect(() => {
    props.getCustomers();
  }, [props.getCustomers]);

  if (props.customers.isLoading) {
    return <p>Loading...</p>;
  }

  if (props.customers.error) {
    return <p>ERROR!</p>;
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <HeaderCustomer />
        <Customers
          customers={props.customers.list}
          isLoading={props.customers.isLoading}
          deleteCustomer={props.deleteCustomer}
          editCustomer={props.editCustomer}
        />
        <AddCustomer addCustomer={props.addCustomer} />
      </div>
    </div>
  );
};

MainCustomers.propTypes = {
  customers: PropTypes.object.isRequired,
  getCustomers: PropTypes.func.isRequired,
  addCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ customers }) => {
  return { customers };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCustomers: getCustomers,
      addCustomer: addCustomer,
      deleteCustomer: deleteCustomer,
      editCustomer: editCustomer,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCustomers);
