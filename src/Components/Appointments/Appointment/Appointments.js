import React, { Component } from 'react';
import ListAppointment from './ListAppointment/ListAppointment';
import PropTypes from 'prop-types';

class Appointments extends Component {
  render() {
      return this.props.appointments.map((appointments) => (
        <ListAppointment 
          key={appointments.id} 
          appointments={appointments}
          updateAppointment={this.props.updateAppointment} 
          delAppointment={this.props.delAppointment}
        />
      ));
  }
}

Appointments.propTypes = {
    appointments: PropTypes.array.isRequired
}

export default Appointments;