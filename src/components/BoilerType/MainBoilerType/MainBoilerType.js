import React, { useEffect, useState } from "react";
import Header from "../HeaderBoilerType/HeaderBoilerType";
import ListBoilerType from "../ListBoilerType/ListBoilerType";
import AddBoilerType from "../AddBoilerType/AddBoilerType";
import style from "./MainBoilerType.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  getBoilersTypes,
  addBoilerType,
  deleteBoilerType,
  editBoilerType
} from '../../../redux/actions/boilerTypeActions';
import Modal from "../../Modal/Modal";

const MainBoilerType = (props) => {
  useEffect(()=>{
    props.getBoilersTypes();
  }, [props.getBoilersTypes]);

  const [openModal, setOpenModal] = useState(false);

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
        <ListBoilerType 
          boilerTypes={props.boilerTypes.list} 
          isLoading={props.boilerTypes.isLoading}
          deleteBoilerType={props.deleteBoilerType}
          editBoilerType={props.editBoilerType}
        />
        <button className={style.btnAdd} onClick={() => setOpenModal(true)}>
          Add New Boiler Type
        </button>
        <Modal
          title="Add New Boiler Type"
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <AddBoilerType setOpenModal={setOpenModal} addBoilerType={props.addBoilerType}/>
        </Modal>
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
