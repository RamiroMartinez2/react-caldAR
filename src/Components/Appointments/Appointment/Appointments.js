import React, { Component } from 'react';
import ListAppointment from '../ListAppointment/ListAppointment';
import PropTypes from 'prop-types';
import './Appointment.css'

class Appointments extends Component {
  render(){
      return(
        <div>
          <ul className="ulStyle">
              <li className="liStyleHeader">Id</li>
              <li className="liStyleHeader">Building Id</li>
              <li className="liStyleHeader">Boiler Id</li>
              <li className="liStyleHeader">Date</li>
              <li className="liStyleHeader">Estimated Time</li>
              <li className="liStyleHeader">Maintenance Type</li>
              <li className="liStyleHeader">Actions</li>
          </ul>
          {this.props.appoint.map((appointments) => (
          <ListAppointment 
            key={appointments.id} 
            appointments={appointments}
            updateAppointment={this.props.updateAppointment} 
            delAppointment={this.props.delAppointment}
          />
          
          ))}
        </div>
      )
  }
}

Appointments.propTypes = {
    appoint: PropTypes.array.isRequired,
    updateAppointment: PropTypes.array.isRequired,
    delAppointment: PropTypes.array.isRequired
}

export default Appointments;