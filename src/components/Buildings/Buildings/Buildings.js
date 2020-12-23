import React, { Component } from "react";
import Bld from "../Bld/Bld";
import AddBuildings from "../AddBuildings/AddBuildings";
import HeaderBuilding from "../HeaderBuildings/HeaderBuildings";
import mockBuildings from "../../../Mocks/buildings.json";
import { v4 as uuidv4 } from "uuid";
import "./Buildings.css";

class Buildings extends Component {
  state = { mockBuildings };

  delBld = (id) => {
    this.setState({
      mockBuildings: [
        ...this.state.mockBuildings.filter((bld) => bld.id !== id),
      ],
    });
  };

  updateBuilding = (bldUpdated) => {
    this.setState({
      mockBuildings: [
        ...this.state.mockBuildings.map((bld) => {
          if (bld.id === bldUpdated.id) {
            bld = bldUpdated;
          }
          return bld;
        }),
      ],
    });
  };

  addBld = ({ address, boilersId, fullName, phone }) => {
    const newList = {
      id: uuidv4(),
      address,
      boilersId,
      fullName,
      phone,
    };
    this.setState({ mockBuildings: [...this.state.mockBuildings, newList] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <HeaderBuilding />
          <Bld
            buildings={this.state.mockBuildings}
            delBld={this.delBld}
            updateBuilding={this.updateBuilding}
          />
          <AddBuildings addBld={this.addBld} />
        </div>
      </div>
    );
  }
}

export default Buildings;
