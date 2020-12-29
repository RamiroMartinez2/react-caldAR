import React, { useState } from "react";
import { connect } from 'react-redux';
import style from "./AddBoilerType.module.css";
import PropTypes from "prop-types";
import { addBoilerType } from '../../../redux/actions/boilerTypeActions';

const AddBoilerType = (props) => {
  const [boilerType, setNewBoilerType] = useState ({
    skillsId: "",
    description: "",
    stock: "",
  });

  const onChange = (e) => setNewBoilerType({...boilerType, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBoilerType(boilerType)
    setNewBoilerType({
      skillsId: "",
      description: "",
      stock: "",
    });
  };

  return (
    <form className={style.addForm} onSubmit={onSubmit}>
      <input
        className={style.inputStyle}
        type="text"
        name="skillsId"
        placeholder="Skills ID"
        value={boilerType.skillsId}
        onChange={onChange}
        required
      ></input>
      <input
        className={style.inputStyle}
        type="text"
        name="description"
        placeholder="Description"
        value={boilerType.description}
        onChange={onChange}
        required
      ></input>
      <input
        className={style.inputStyle}
        type="text"
        name="stock"
        placeholder="Stock"
        value={boilerType.stock}
        onChange={onChange}
        required
      ></input>
      <input
        className={style.btnSubmit}
        type="submit"
        value="Add new Boiler Type"
      ></input>
    </form>
  );
}

AddBoilerType.propTypes = {
  addBoilerType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBoilerType: (content) => dispatch(addBoilerType(content))
  };
}

const mapStateToProps = state => {
  return{
    boilerType: state.boilerTypes
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoilerType);
