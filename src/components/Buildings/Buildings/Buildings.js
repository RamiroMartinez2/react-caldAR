import React, { useEffect } from "react";
import Bld from "../Bld/Bld";
import AddBuildings from "../AddBuildings/AddBuildings";
import HeaderBuilding from "../HeaderBuildings/HeaderBuildings";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import style from "./Buildings.module.css";
import {
  getBuildingsAsync,
  deleteBuildingAsync,
  updateBuildingAsync,
  addBuildingAsync,
} from "../../../redux/actions/buildingAction";

const Buildings = (props) => {
  useEffect(() => {
    props.getBuildings();
  }, [props.getBuildings]);

  if (props.buildings.isLoading) {
    return <p>Loading...</p>;
  }

  if (props.buildings.error) {
    return <p>Error...</p>;
  }
  return (
    <div className="App">
      <div className={style.container}>
        <HeaderBuilding />
        <Bld
          buildings={props.buildings.list}
          isLoading={props.buildings.isLoading}
          delBuilding={props.delBuilding}
          updateBuilding={props.updateBuilding}
        />
        <AddBuildings addBuilding={props.addBuilding} />
      </div>
    </div>
  );
};

Buildings.propTypes = {
  buildings: PropTypes.object.isRequired,
  getBuildings: PropTypes.func.isRequired,
  addBuilding: PropTypes.func.isRequired,
  delBuilding: PropTypes.func.isRequired,
  updateBuilding: PropTypes.func.isRequired,
};

const mapStateToProps = ({ buildings }) => {
  return { buildings };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBuildings: getBuildingsAsync,
      addBuilding: addBuildingAsync,
      delBuilding: deleteBuildingAsync,
      updateBuilding: updateBuildingAsync,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
