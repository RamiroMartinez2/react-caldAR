import React, { useEffect } from 'react';
import ListTechnicians from '../ListTechnician/ListTechnician';
import AddTechnician from '../AddTechnician/AddTechnician';
import HeaderTechnician from '../HeaderTechnician/HeaderTechnician';
import style from './MainTechnician.module.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { 
  getTechniciansAsync,
  deleteTechAsync,
  updateTechAsync,
  addTechAsync } from '../../../redux/actions/technicianAction';

const MainTechnician = (props) => {

  useEffect(() => {
    props.getTechnicians();
  }, [props.getTechnicians]) 

  return (
    <div className="App">
      <div className={style.container}>
        <HeaderTechnician />
        <ListTechnicians 
          technicians={props.technicians.list}
          deleteTechnician={props.deleteTechnician}
          updateTechnician={props.updateTechnician}
        />
        <AddTechnician addTechnician={props.addTechnician} />
      </div>
    </div>
  );
}

MainTechnician.propTypes = {
  technicians: PropTypes.object.isRequired,
  getTechnicians: PropTypes.func.isRequired,
  addTechnician: PropTypes.func.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
  updateTechnician: PropTypes.func.isRequired,
}

const mapStateToProps = ({technicians}) => {
  return {technicians};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTechnicians: getTechniciansAsync,
    addTechnician: addTechAsync,
    deleteTechnician: deleteTechAsync,
    updateTechnician: updateTechAsync,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTechnician);