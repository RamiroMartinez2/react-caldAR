import React from "react";
import AddCustomer from "../AddCustomer/AddCustomer";
import Customers from "../Customers/Customers";
import HeaderCustomer from "../HeaderCustomer/HeaderCustomer";
import styles from "./MainCustomer.module.css";
<<<<<<< HEAD
import { connect } from "react-redux";
import PropTypes from "prop-types";
=======
>>>>>>> c9ab34d (Add css module)

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

<<<<<<< HEAD
export default connect(mapStateToProps)(MainCustomer);
=======
  render() {
    return (
      <div className={styles.Main} >
        <div  className={styles.Container}>
          {" "}
          <HeaderCustomer />
          <Customers
            customers={this.state.customers}
            delCustomer={this.delCustomer}
            updateCustomer={this.updateCustomer}
          />
          <AddCustomer AddCustomer={this.AddCustomer} />
        </div>
      </div>
    );
  }
}
>>>>>>> c9ab34d (Add css module)
