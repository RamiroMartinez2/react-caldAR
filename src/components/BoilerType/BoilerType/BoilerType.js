import React, { Component } from "react";
import PropTypes from 'prop-types';
import ListBoilerType from "../ListBoilerType/ListBoilerType";

class BoilerType extends Component {
  render() {
    return this.props.boilerList.map((list) => (
      <ListBoilerType
        key={list.id}
        list={list}
        delBoilerType={this.props.delBoilerType}
        updateBoilerType={this.props.updateBoilerType}
      />
    ));
  }
}

BoilerType.propTypes = {
  boilerList: PropTypes.array.isRequired,
  delBoilerType: PropTypes.array.isRequired,
  updateBoilerType: PropTypes.array.isRequired,
}

export default BoilerType;
