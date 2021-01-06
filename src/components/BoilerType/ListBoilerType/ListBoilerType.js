import React from "react";
import BoilerType from "../BoilerType/BoilerType";
import style from "./ListBoilerType.module.css";
import PropTypes from "prop-types";

const ListBoilerTypes = (props) => {
  const listBoilerType = props.boilerTypes.map((boilerType) => (
    <BoilerType
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

ListBoilerTypes.propTypes = {
  boilerTypes: PropTypes.array.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
};

export default ListBoilerTypes;
