import React, { useEffect, useState } from "react";
import Appointments from "../Appointment/Appointments";
import AddAppointment from "../AddAppointment/AddAppointment";
import Header from "../HeaderAppointment/HeaderAppointment";
import style from "./MainAppointment.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  getAppointmentAsync,
  deleteAppointmentAsync,
  updateAppointmentAsync,
  addAppointmentAsync,
} from "../../../redux/actions/appointmentActions";
import Modal from "../../Modal/Modal";

const MainAppointment = (props) => {
  useEffect(() => {
    props.getAppointment();
  }, [props.getAppointment]);

  const [openModal, setOpenModal] = useState(false);

  if (props.appointments.isLoading) {
    return <p>Loading...</p>;
  }
  if (props.appointments.error) {
    return <p>Error...</p>;
  }
  return (
    <div className="App">
      <div className={style.container}>
        <Header />
        <Appointments
          appointments={props.appointments.list}
          isLoading={props.appointments.isLoading}
          deleteAppointment={props.deleteAppointment}
          updateAppointment={props.updateAppointment}
        />
        <button className={style.btnAdd} onClick={() => setOpenModal(true)}>
          Add new appointment
        </button>
        <Modal
          title="Add New Appointment"
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <AddAppointment
            setOpenModal={setOpenModal}
            addAppointment={props.addAppointment}
          />
        </Modal>
      </div>
    </div>
  );
};

MainAppointment.propTypes = {
  appointments: PropTypes.object.isRequired,
  getAppointment: PropTypes.func.isRequired,
  addAppointment: PropTypes.func.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  updateAppointment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ appointments }) => {
  return { appointments };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAppointment: getAppointmentAsync,
      addAppointment: addAppointmentAsync,
      deleteAppointment: deleteAppointmentAsync,
      updateAppointment: updateAppointmentAsync,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainAppointment);
