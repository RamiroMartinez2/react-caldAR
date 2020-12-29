import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import styles from "./AddBoiler.module.css";
import { addBoiler, getBoilers, deleteBoiler } from '../../../redux/actions/boilerActions';
import { bindActionCreators } from 'redux'

const AddBoiler = ({
  boilers, 
  isLoading,
  error,
  getBoilers,
  addBoiler
}) => {
  const [showBoilerForm, toggleBoilerForm] = useState(false);
  useEffect(() => {
    getBoilers();
  }, [getBoilers]);

  const AddNewBoiler = boilers => {
    addBoiler(boilers);
    toggleBoilerForm(!showBoilerForm);
  };

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>ERROR!!</div>
  }

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    addBoiler: addBoiler,
    getBoilers: getBoilers, 
    deleteBoiler: deleteBoiler
  }, dispatch);
}

const mapStateToProps = state => {
  return{
    isLoading: state.boilers.isLoading,
    error: state.boilers.error,
    boilers: state.boilers.list
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoiler);
