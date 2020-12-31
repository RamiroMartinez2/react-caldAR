import React from "react";
import Bld from "../Bld/Bld";
import AddBuildings from "../AddBuildings/AddBuildings";
import HeaderBuilding from "../HeaderBuildings/HeaderBuildings";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Buildings.css";

const Buildings = (props) => {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <HeaderBuilding />
        <Bld buildings={props.buildings} />
        <AddBuildings />
      </div>
    </div>
  );
};

Buildings.propTypes = {
  buildings: PropTypes.array.isRequired,
};

const mapStateToProps = ({ buildings }) => {
  return { buildings };
};

export default connect(mapStateToProps)(Buildings);
