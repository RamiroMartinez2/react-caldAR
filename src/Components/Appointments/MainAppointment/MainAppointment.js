import React, { Component } from "react";
import Appointments from "../Appointment/Appointments";
import mockAppointment from "../../../Mock/mocksAppointment.json";
import AddAppointment from "../AddAppointment/AddAppointment";

class MainAppointment extends Component {
  state = { mockAppointment }


  delAppointment = (id) => {
    this.setState({ mockAppointment: [...this.state.mockAppointment.filter(appointment => appointment.id !== id)] })
  }

  updateAppointment = (appointmentUpdated) => {
    this.setState({
      mockAppointment: [...this.state.mockAppointment.map(appointment => {
        if (appointment.id === appointmentUpdated.id) {
          appointment = appointmentUpdated;
        }
        return appointment;
      })]
    });
  }

  addAppointment = ({ id, buildingId, boilerId, date, estimatedTime, maintenanceType }) => {
    const newAppointment = {
      id,
      buildingId,
      boilerId,
      date,
      estimatedTime,
      maintenanceType
    }
    this.setState({ mockAppointment: [...this.state.mockAppointment, newAppointment] })
  }

  render() {
    return (
      <div>
        <Appointments
          Appointment={this.state.mockAppointment}
          delAppointment={this.delAppointment}
          updateAppointment={this.addAppointment}
        />
        <AddAppointment addAppointment={this.addAppointment}
        />
      </div>
    );
  }
}



export default MainAppointment;