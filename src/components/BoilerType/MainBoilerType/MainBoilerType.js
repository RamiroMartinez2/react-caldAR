import React, { useEffect } from "react";
import Header from "../HeaderBoilerType/HeaderBoilerType";
import BoilerType from "../BoilerType/BoilerType";
import AddBoilerType from "../AddBoilerType/AddBoilerType";
import { connect } from "react-redux";
import style from "./MainBoilerType.module.css";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  getBoilersTypes,
  addBoilerType,
  deleteBoilerType,
  editBoilerType
} from '../../../redux/actions/boilerTypeActions'

const MainBoilerType = (props) => {
  useEffect(()=>{
    props.getBoilersTypes();
  }, [props.getBoilersTypes]);

  if (props.boilerTypes.isLoading){
    return <p>Loading...</p>
  }

  if (props.boilerTypes.error){
    return <p>ERROR!</p>
  }
  
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header />
        <BoilerType 
          boilerTypes={props.boilerTypes.list} 
          isLoading={props.boilerTypes.isLoading}
          deleteBoilerType={props.deleteBoilerType}
          editBoilerType={props.editBoilerType}
        />
        <AddBoilerType addBoilerType={props.addBoilerType}/>
      </div>
    </div>
  );
};
MainBoilerType.propTypes = {
  boilerTypes: PropTypes.object.isRequired,
  getBoilersTypes: PropTypes.func.isRequired,
  addBoilerType: PropTypes.func.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
};

const mapStateToProps = ({ boilerTypes }) => {
  return { boilerTypes };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilersTypes: getBoilersTypes,
      addBoilerType: addBoilerType,
      deleteBoilerType: deleteBoilerType,
      editBoilerType: editBoilerType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBoilerType);
