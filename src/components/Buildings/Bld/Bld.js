import React from "react";
import ListBuildings from "../ListBuildings/ListBuildings";
import "./Bld.css";
import PropTypes from "prop-types";

const Bld = (props) => {
  const build = props.buildings.map((building) => (
    <ListBuildings key={building.id} building={building} />
  ));
  return (
    <div>
      <ul className="ulStyle">
        <li className="liStyleHeader">Id</li>
        <li className="liStyleHeader">Address</li>
        <li className="liStyleHeader">Boilers Id</li>
        <li className="liStyleHeader">Name</li>
        <li className="liStyleHeader">Phone</li>
      </ul>
      {build}
    </div>
  );
};
Bld.propTypes = {
  buildings: PropTypes.array.isRequired,
  delBld: PropTypes.array.isRequired,
  updateBuilding: PropTypes.array.isRequired,
};

export default Bld;
