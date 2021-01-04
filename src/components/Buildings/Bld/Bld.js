import React from "react";
import ListBuildings from "../ListBuildings/ListBuildings";
import "./Bld.css";
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
      <ul className="ulStyle">
        <li className="liStyleHeader">Id</li>
        <li className="liStyleHeader">Address</li>
        <li className="liStyleHeader">Boilers Id</li>
        <li className="liStyleHeader">Name</li>
        <li className="liStyleHeader">Phone</li>
        <li className="liStyleHeader">Actions</li>
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
