import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import {
  delCustomer as delCustomerAction,
  updateCustomer as updateCustomerAction,
} from "../../../redux/actions/customerAction";


const Item =(props)=> {
  
  const [isEditing, toggleEditing] = useState(false);
  const [customer, setCustomer] = useState({...props.customer});

  const cancelClick = () => {
    toggleEditing();
    setCustomer(props.customer);
  }

  const toggleEdit = () => {
    toggleEditing(!isEditing);
  };


  const saveChanges = () => {
    props.updateCustomer(customer);
  };
  

  const onChange = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value});
  }
  

    if (isEditing) {
      return (
        <ul className={styles.showForm}>
          <input
            className={styles.inputStyleEdt}
            type="text"
            name="id"
            placeholder="Add a valid ID"
            defaultValue={customer._id}
            readOnly
          />
          <input
            className={styles.inputStyleEdt}
            type="text"
            name="customerType"
            placeholder="Particular or Business"
            defaultValue={customer.customerType}
            onChange={onChange}
            required
          />
          <input
            className={styles.inputStyleEdt}
            type="email"
            name="email"
            placeholder="ramiro@hotmail.com"
            defaultValue={customer.email}
            onChange={onChange}
            required
          />
          <input
            className={styles.inputStyleEdt}
            type="text"
            name="buildings"
            placeholder="Add how many buildings you have"
            defaultValue={customer.buildings}
            onChange={onChange}
            required
          />
          <input
            className={styles.inputStyleEdt}
            type="text"
            name="fiscal_address"
            placeholder="Cordoba 2020"
            defaultValue={customer.fiscal_address}
            onChange={onChange}
            required
          />
          <div>
          <button onClick={cancelClick} className={styles.Btn}><FcCancel /></button>
          <button onClick={saveChanges} className={styles.Btn}><AiOutlineCheckCircle/></button>
        </div>
        </ul>
      );
    }

  return (
    <>
      <ul className={styles.showForm}>
        <li className={styles.liStyle}>{props.customer.id}</li>
        <li className={styles.liStyle}>{props.customer.customerType}</li>
        <li className={styles.liStyle}>{props.customer.email}</li>
        <li className={styles.liStyle}>{props.customer.buildings}</li>
        <li className={styles.liStyle}>{props.customer.fiscal_address}</li>
        <div>
          <button
            onClick={() => props.delCustomer(props.customer.id)}
            className={styles.Btn}
          >
            <GoTrashcan />
          </button>
          <button onClick={toggleEdit} className={styles.Btn}>
            <BiPencil />
          </button>
        </div>
      </ul>
    </>
  );
}


Item.propTypes = {
  customer: PropTypes.object.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    delCustomer: (number) => dispatch(delCustomerAction(number)),
    updateCustomer: (content) => dispatch(updateCustomerAction(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};
   

export default connect(mapStateToProps, mapDispatchToProps)(Item);
