import React, { useEffect, useState } from "react";
import Customers from "../Customers/Customers";
import AddCustomer from "../AddCustomer/AddCustomer";
import HeaderCustomer from "../HeaderCustomer/HeaderCustomer";
import style from "./MainCustomer.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  getCustomersAsync,
  addCustomerAsync,
  deleteCustomerAsync,
  updateCustomerAsync,
} from "../../../redux/actions/customerAction";
import Modal from "../../Modal/Modal";


const MainCustomers = (props) => {
  
  useEffect(() => {
    props.getCustomers();
  }, [props.getCustomers]);

  const [openModal, setOpenModal] = useState(false);

  if (props.customers.isLoading) {
    return <p>Loading...</p>;
  }

  if (props.customers.error) {
    return <p>ERROR!</p>;
  }

  return (
    <div className="App">
      <div className={style.container}>
        <HeaderCustomer />
        <Customers
          customers={props.customers.list}
          isLoading={props.customers.isLoading}
          deleteCustomer={props.deleteCustomer}
          updateCustomer={props.updateCustomer}
        />
        <button className={style.btnAdd} onClick={() => setOpenModal(true)}>
          Add New Customer
        </button>
        <Modal
          title="Add New Customer"
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <AddCustomer addCustomer={props.addCustomer} setOpenModal={setOpenModal}
          />
        </Modal>
      </div>
    </div>
  );
};

MainCustomers.propTypes = {
  customers: PropTypes.object.isRequired,
  getCustomers: PropTypes.func.isRequired,
  addCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ customers }) => {
  return { customers };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCustomers: getCustomersAsync,
      addCustomer: addCustomerAsync,
      deleteCustomer: deleteCustomerAsync,
      updateCustomer: updateCustomerAsync,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCustomers);

