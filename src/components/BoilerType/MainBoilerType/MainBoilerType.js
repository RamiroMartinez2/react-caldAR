import React, { Component } from "react";
import BoilerType from "../BoilerType/BoilerType";
import mockBoilerType from "../../../mocks/mocksBoilerType.json";
import AddBoilerType from "../AddBoilerType/AddBoilerType";

class MainBoilerType extends Component {
  state = { mockBoilerType };

  delBoilerType = (id) => {
    this.setState({
      mockBoilerType: [
        ...this.state.mockBoilerType.filter(
          (boilerType) => boilerType.id !== id
        ),
      ],
    });
  };

  updateBoilerType = (boilerTypeUpdated) => {
    this.setState({
      mockBoilerType: [
        ...this.state.mockBoilerType.map((boilerType) => {
          if (boilerType.id === boilerTypeUpdated.id) {
            boilerType = boilerTypeUpdated;
          }
          return boilerType;
        }),
      ],
    });
  };

  addBoilerType = ({ id, skillsId, description, stock }) => {
    const newBoilerType = {
      id,
      skillsId,
      description,
      stock,
    };
    this.setState({
      mockBoilerType: [...this.state.mockBoilerType, newBoilerType],
    });
  };

  render() {
    return (
      <div>
        <BoilerType
          boilerList={this.state.mockBoilerType}
          delBoilerType={this.delBoilerType}
          updateBoilerType={this.updateBoilerType}
        />
        <AddBoilerType addBoilerType={this.addBoilerType} />
      </div>
    );
  }
}

export default MainBoilerType;
