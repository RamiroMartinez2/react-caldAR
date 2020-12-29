import React, { useState } from "react";
import { connect } from 'react-redux';
import styles from "./AddBoiler.module.css";
import PropTypes from "prop-types";
import { addBoiler } from '../../../redux/actions/boilerActions';

const AddBoiler = (props) => {

  const [boiler, setNewBoiler] = useState ({
    typeId: "",
    maintaince_rate: "",
    hour_maintaince_cost: "",
    hour_eventual_cost: "",
  })

  const onChange = (e) => setNewBoiler({...boiler, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    props.addBoiler(boiler);
    setNewBoiler({
      typeId: "",
      maintaince_rate: "",
      hour_maintaince_cost: "",
      hour_eventual_cost: "",
    });
  };

  return (
    <form className={styles.addForm} onSubmit={onSubmit}>
      <input
        className={styles.inputStyle}
        type="text"
        name="typeId"
        placeholder="Add Type ID..."
        value={boiler.typeId}
        onChange={onChange}
        required
      />
      <input
        className={styles.inputStyle}
        type="text"
        name="maintaince_rate"
        placeholder="Add Maintaince Rate:..."
        value={boiler.maintaince_rate}
        onChange={onChange}
        required
      />
      <input
        className={styles.inputStyle}
        type="number"
        name="hour_maintaince_cost"
        placeholder="Add Hour Maintaince Cost..."
        value={boiler.hour_maintaince_cost}
        onChange={onChange}
        required
      />
      <input
        className={styles.inputStyle}
        type="number"
        name="hour_eventual_cost"
        placeholder="Add Hour Eventual Cost..."
        value={boiler.hour_eventual_cost}
        onChange={onChange}
        required
      />
      <input
        className={styles.btnSubmit}
        type="submit"
        value="Add new boiler"
      />
    </form>
  );
}

AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBoiler: (content) => dispatch(addBoiler(content))
  };
}

const mapStateToProps = state => {
  return{
    boiler: state.boilers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoiler);