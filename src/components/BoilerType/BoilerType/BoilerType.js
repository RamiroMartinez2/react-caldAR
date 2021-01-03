import React from "react";
import PropTypes from "prop-types";
import ListBoilerType from "../ListBoilerType/ListBoilerType";
import style from "./BoilerType.module.css";

const BoilerType = (props) => {
  const listBoilerType = props.boilerTypes.map((boilerType) => (
    <ListBoilerType 
      key={boilerType.id} 
      boilerType={boilerType} 
      deleteBoilerType={props.deleteBoilerType}
      editBoilerType={props.editBoilerType}
    />
  ));
  return (
    <div>
      <ul className={style.ulStyle}>
        <li className={style.liStyleHeader}>Id</li>
        <li className={style.liStyleHeader}>Skills Id</li>
        <li className={style.liStyleHeader}>Description</li>
        <li className={style.liStyleHeader}>Stock</li>
        <li className={style.liStyleHeader}>Actions</li>
      </ul>
      {listBoilerType}
    </div>
  );
};

BoilerType.propTypes = {
  boilerTypes: PropTypes.array.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
};

export default BoilerType;
