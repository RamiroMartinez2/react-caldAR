import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Items.module.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

const Items = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [boiler, setBoiler] = useState({...props.boiler});

  const cancelClick = () => {
    toggleEditing();
    setBoiler(props.boiler);
  }

  const toggleEdit = () => {
    toggleEditing(!isEditing);
  }

  const onChange = (e) => {
    setBoiler({...boiler, [e.target.name]: e.target.value });
  };
  const saveChanges = () => {
    props.editBoiler(boiler);
    toggleEdit();
  }

  if (isEditing) {
    return (
      <ul className={styles.showForm}>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="id"
          value={boiler._id}
          readOnly
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="typeId"
          value={boiler.typeId}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="maintaince_rate"
          value={boiler.maintaince_rate}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="number"
          name="hour_maintaince_cost"
          value={boiler.hour_maintaince_cost}
          onChange={onChange}
          required
        ></input>
        <input
          className={styles.inputStyleEdt}
          type="number"
          name="hour_eventual_cost"
          value={boiler.hour_eventual_cost}
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
      <li className={styles.liStyle}>{props.boiler._id}</li>
      <li className={styles.liStyle}>{props.boiler.typeId}</li>
      <li className={styles.liStyle}>{props.boiler.maintaince_rate}</li>
      <li className={styles.liStyle}>{props.boiler.hour_maintaince_cost}</li>
      <li className={styles.liStyle}>{props.boiler.hour_eventual_cost}</li>
      <div>
        <button
          onClick={() => props.deleteBoiler(props.boiler._id)}
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
}
Items.propTypes = {
  boiler: PropTypes.object.isRequired,
  deleteBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
};

export default Items;