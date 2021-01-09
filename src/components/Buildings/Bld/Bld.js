import React from "react";
import ListBuildings from "../ListBuildings/ListBuildings";
import style from "./Bld.module.css";
import PropTypes from "prop-types";

const Bld = (props) => {
  const build = props.buildings.map((building) => (
    <ListBuildings
      key={building._id}
      building={building}
      delBuilding={props.delBuilding}
      updateBuilding={props.updateBuilding}
    />
  ));
  return (
    <div>
      <ul className={style.ulStyle}>
        <li className={style.liStyleHeader}>Id</li>
        <li className={style.liStyleHeader}>Address</li>
        <li className={style.liStyleHeader}>Boilers Id</li>
        <li className={style.liStyleHeader}>Name</li>
        <li className={style.liStyleHeader}>Phone</li>
        <li className={style.liStyleHeader}>Actions</li>
      </ul>
      {build}
    </div>
  );
};
Bld.propTypes = {
  delBuilding: PropTypes.array.isRequired,
  updateBuilding: PropTypes.array.isRequired,
  buildings: PropTypes.array.isRequired,
};

export default Bld;
