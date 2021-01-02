import React, { useState } from "react";
import style from "./AddBoilerType.module.css";
import PropTypes from "prop-types";

const AddBoilerType = (props) => {
  const [boilerType, setNewBoilerType] = useState({
    skillsId: "",
    descriptions: "",
    stock: "",
  });

  const onChange = (e) =>
    setNewBoilerType({ ...boilerType, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBoilerType({...boilerType});
    setNewBoilerType({
      skillsId: "",
      descriptions: "",
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
        name="descriptions"
        placeholder="Descriptions"
        value={boilerType.descriptions}
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
};

AddBoilerType.propTypes = {
  addBoilerType: PropTypes.func.isRequired,
};


export default AddBoilerType;