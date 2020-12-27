import React from 'react';
import ListTechnicians from '../ListTechnician/ListTechnician';
import AddTechnician from '../AddTechnician/AddTechnician';
import HeaderTechnician from '../HeaderTechnician/HeaderTechnician';
import style from './MainTechnician.module.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const MainTechnician = (props) => {

  return (
    <div className="App">
      <div className={style.container}>
        <HeaderTechnician />
        <ListTechnicians 
          technicians={props.technicians}
        />
        <AddTechnician />
      </div>
    </div>
  );
}

MainTechnician.propTypes = {
  technicians: PropTypes.array.isRequired,
}

const mapStateToProps = ({technicians}) => {
  return {technicians};
}

export default connect(mapStateToProps)(MainTechnician);