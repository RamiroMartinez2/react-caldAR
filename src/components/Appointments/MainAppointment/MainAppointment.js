import React, { Component } from "react";
import Header from "../HeaderAppointment/HeaderAppointment"
import Appointments from "../Appointment/Appointments";
import mockAppointment from "../../../mocks/mocksAppointment.json";
import AddAppointment from "../AddAppointment/AddAppointment";
import style from "./MainAppointment.module.css"

class MainAppointment extends Component {
  state = { mockAppointment };
  delAppointment = (id) => {
    this.setState({
      mockAppointment: [
        ...this.state.mockAppointment.filter(
          (appointment) => appointment.id !== id
        ),
      ],
    });
  };

  updateAppointment = (appointmentUpdated) => {
    this.setState({
      mockAppointment: [
        ...this.state.mockAppointment.map((appointment) => {
          if (appointment.id === appointmentUpdated.id) {
            appointment = appointmentUpdated;
          }
          return appointment;
        }),
      ],
    });
  };

  addAppointment = ({
    id,
    buildingId,
    boilerId,
    date,
    estimatedTime,
    maintenanceType,
  }) => {
    const newAppointment = {
      id,
      buildingId,
      boilerId,
      date,
      estimatedTime,
      maintenanceType,
    };
    this.setState({
      mockAppointment: [...this.state.mockAppointment, newAppointment],
    });
  };
  render() {
    return (
      <div className={style.App}>
        <div className={style.container}>
          <Header />
          <Appointments
            appointments={this.state.mockAppointment}
            delAppointment={this.delAppointment}
            updateAppointment={this.updateAppointment}
          />
          <AddAppointment addAppointment={this.addAppointment} />
        </div>
      </div>
    );
  }
}

export default MainAppointment;
