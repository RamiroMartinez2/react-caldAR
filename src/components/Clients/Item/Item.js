import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

const Item = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [customer, setCustomer] = useState({ ...props.customer });

  const cancelClick = () => {
    toggleEditing();
    setCustomer(props.customer);
  };

  const toggleEdit = () => {
    toggleEditing(!isEditing);
  };

  const onChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  const saveChanges = () => {
    props.editCustomer(customer);
    toggleEdit();
  };

  if (isEditing) {
    return (
      <ul className={styles.showForm}>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="id"
          value={customer._id}
          readOnly
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="customerType"
          value={customer.customerType}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="email"
          name="email"
          value={customer.email}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="number"
          name="buildings"
          value={customer.buildings}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="fiscal_address"
          value={customer.fiscal_address}
          onChange={onChange}
          required
        ></input>
        <div>
          <button onClick={cancelClick} className={styles.Btn}>
            <FcCancel />
          </button>
          <button onClick={saveChanges} className={styles.Btn}>
            <AiOutlineCheckCircle />
          </button>
        </div>
      </ul>
    );
  }
  return (
    <ul className={styles.showForm}>
      <li className={styles.liStyle}>{props.customer._id}</li>
      <li className={styles.liStyle}>{props.customer.customerType}</li>
      <li className={styles.liStyle}>{props.customer.email}</li>
      <li className={styles.liStyle}>{props.customer.buildings}</li>
      <li className={styles.liStyle}>{props.customer.fiscal_address}</li>
      <div>
        <button
          onClick={() => props.deleteCustomer(props.customer._id)}
          className={styles.Btn}
        >
          <GoTrashcan />
        </button>
        <button onClick={toggleEdit} className={styles.Btn}>
          <BiPencil />
        </button>
      </div>
    </ul>
  );
};
Item.propTypes = {
  customer: PropTypes.object.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
};

export default Item;
