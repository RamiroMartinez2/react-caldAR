import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import styles from "./Items.module.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { deleteBoiler, editBoiler } from '../../../redux/actions/boilerActions'

const Items = ({
    boiler, 
    isLoading,
    error, 
    addBoiler, 
    deleteBoiler, 
    editBoiler
}) => {
  const [isEditing, toggleEditing] = useState(false);
  //const [boiler, setBoiler] = useState({...props.boiler});

  useEffect(() => {
    getBoilers();
  }, [getBoilers]);

  if (isLoading){
    return <div>Loading...</div>
  }

  if (error){
    return <div>ERROR!!</div>
  }

  const toggleEdit = () => {
    setBoiler(props.boiler);
    toggleEditing(!isEditing);
  }
  const onChange = (e) => {
    setBoiler({...boiler, [e.target.name]: e.target.value });
  };
  const saveChanges = () => {
    toggleEdit();
    props.editBoiler(boiler);
  }

  if (isEditing) {
    return (
      <ul className={styles.showForm}>
        <input
          className={styles.inputStyleEdt}
          type="text"
          name="id"
          value={boiler.id}
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
          <button onClick={toggleEdit} className={styles.Btn}>
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
      <li className={styles.liStyle}>{props.boiler.id}</li>
      <li className={styles.liStyle}>{props.boiler.typeId}</li>
      <li className={styles.liStyle}>{props.boiler.maintaince_rate}</li>
      <li className={styles.liStyle}>
        ${props.boiler.hour_maintaince_cost}
      </li>
      <li className={styles.liStyle}>
        ${props.boiler.hour_eventual_cost}
      </li>
      <div>
        <button
          onClick={() => props.deleteBoiler(props.boiler.id)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoiler: (number) => dispatch (deleteBoiler(number)),
    editBoiler: (content) => dispatch (editBoiler(content))
  };
}

const mapStateToProps = state => {
  return{
    boilers: state.boilers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
