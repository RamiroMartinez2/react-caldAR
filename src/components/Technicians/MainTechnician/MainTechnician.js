import React, { useEffect, useState } from "react";
import ListTechnicians from "../ListTechnician/ListTechnician";
import AddTechnician from "../AddTechnician/AddTechnician";
import HeaderTechnician from "../HeaderTechnician/HeaderTechnician";
import style from "./MainTechnician.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  getTechniciansAsync,
  deleteTechAsync,
  updateTechAsync,
  addTechAsync,
} from "../../../redux/actions/technicianAction";

const MainTechnician = (props) => {
  useEffect(() => {
    props.getTechnicians();
  }, [props.getTechnicians]);
  const [isAdding, toggleAdding] = useState(false);

  if (props.technicians.isLoading) {
    return <p>Loading...</p>;
  }

  if (props.technicians.error) {
    return <p>Error...</p>;
  }
  const addForm = () => {
    toggleAdding(!isAdding);
  }
  
  if (isAdding){
    return (
      <AddTechnician addTechnician={props.addTechnician}/>
    )
  }
  return (
    <div className="App">
      <div className={style.container}>
        <HeaderTechnician />
        <ListTechnicians
          technicians={props.technicians.list}
          isLoading={props.technicians.isLoading}
          deleteTechnician={props.deleteTechnician}
          updateTechnician={props.updateTechnician}
        />
        <button onClick={addForm} >ADD</button>
      </div>
    </div>
  );
};

MainTechnician.propTypes = {
  technicians: PropTypes.object.isRequired,
  getTechnicians: PropTypes.func.isRequired,
  addTechnician: PropTypes.func.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
  updateTechnician: PropTypes.func.isRequired,
};

const mapStateToProps = ({ technicians }) => {
  return { technicians };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTechnicians: getTechniciansAsync,
      addTechnician: addTechAsync,
      deleteTechnician: deleteTechAsync,
      updateTechnician: updateTechAsync,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTechnician);
