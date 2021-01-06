import React, { useEffect, useState } from "react";
import Header from "../HeaderBoiler/Header";
import Boilers from "../Boilers/Boilers";
import AddBoiler from "../AddBoiler/AddBoiler";
import { connect } from "react-redux";
import styles from "./MainBoiler.module.css";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  getBoilers,
  addBoiler,
  deleteBoiler,
  editBoiler
} from '../../../redux/actions/boilerActions';
import Modal from "../../Modal/Modal";

const MainBoiler = (props) => {
  useEffect(()=>{
    props.getBoilers();
  }, [props.getBoilers]);

  const [openModal, setOpenModal] = useState(false);

  if (props.boilers.isLoading){
    return <p>Loading...</p>
  }

  if (props.boilers.error){
    return <p>ERROR!</p>
  }

  return (
    <div className="App">
      <div className={styles.Container}>
        <Header />
        <Boilers 
          boilers={props.boilers.list} 
          isLoading={props.boilers.isLoading}
          deleteBoiler={props.deleteBoiler}
          editBoiler={props.editBoiler}
        />
        <button className={styles.btnAdd} onClick={() => setOpenModal(true)}>
          Add New Boiler
        </button>
        <Modal
          title="Add New Boiler"
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <AddBoiler addBoiler={props.addBoiler}/>
        </Modal>
      </div>
    </div>
  );
};

MainBoiler.propTypes = {
  boilers: PropTypes.object.isRequired,
  getBoilers: PropTypes.func.isRequired,
  addBoiler: PropTypes.func.isRequired,
  deleteBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
};

const mapStateToProps = ({ boilers }) => {
  return { boilers };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilers: getBoilers,
      addBoiler: addBoiler,
      deleteBoiler: deleteBoiler,
      editBoiler: editBoiler,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBoiler);
