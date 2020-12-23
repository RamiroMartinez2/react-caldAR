import React, { Component } from "react";
import ListBuildings from "../ListBuildings/ListBuildings";
import "./Bld.css";
import PropTypes from "prop-types";

class Bld extends Component {
  render() {
    return (
      <div>
        <ul className="ulStyle">
          <li className="liStyleHeader">Id</li>
          <li className="liStyleHeader">Address</li>
          <li className="liStyleHeader">Boilers Id</li>
          <li className="liStyleHeader">Name</li>
          <li className="liStyleHeader">Phone</li>
        </ul>
        {this.props.buildings.map((Bld) => (
          <ListBuildings
            key={Bld.id}
            Bld={Bld}
            delBld={this.props.delBld}
            updateBuilding={this.props.updateBuilding}
          />
        ))}
      </div>
    );
  }
}
Bld.propTypes = {
  buildings: PropTypes.array.isRequired,
  delBld: PropTypes.array.isRequired,
  updateBuilding: PropTypes.array.isRequired,
};

export default Bld;
