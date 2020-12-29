import React, { Component } from "react";
import PropTypes from 'prop-types';
import ListBoilerType from "../ListBoilerType/ListBoilerType";
import style from './BoilerType.module.css'

class BoilerType extends Component {
  render() {
    return (
      <div>
        <ul className={style.ulStyle}>
            <li className={style.liStyleHeader}>Id</li>
            <li className={style.liStyleHeader}>Skills Id</li>
            <li className={style.liStyleHeader}>Description</li>
            <li className={style.liStyleHeader}>Stock</li>            
            <li className={style.liStyleHeader}>Actions</li>
          </ul>
      {this.props.boilerList.map((list) => (
      <ListBoilerType
        key={list.id}
        list={list}
        delBoilerType={this.props.delBoilerType}
        updateBoilerType={this.props.updateBoilerType}
      />
      ))}
      </div>
    );
  }
}

BoilerType.propTypes = {
  boilerList: PropTypes.array.isRequired,
  delBoilerType: PropTypes.array.isRequired,
  updateBoilerType: PropTypes.array.isRequired,
}

export default BoilerType;
