import React, { Component } from "react";
import ListBoilerType from "../ListBoilerType/ListBoilerType";


class BoilerType extends Component {
  render() {
    return this.props.BoilersList.map((list) => (
      <ListBoilerType
        key={list.id}
        list={list}
        delBoild={this.props.delBoild}
        updateBoiler={this.props.updateBoiler}
      />
    ));
  }
}

export default BoilerType;
