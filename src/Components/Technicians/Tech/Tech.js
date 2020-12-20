import React, {Component} from 'react';
import ListTechnician from '../ListTechnician/ListTechnician';
import './Tech.css'
import PropTypes from 'prop-types';

class Tech extends Component {
  render(){
    return(
      <div>
        <ul className="ulStyle">
          <li className="liStyleHeader">Id</li>
          <li className="liStyleHeader">Full Name</li>
          <li className="liStyleHeader">Email</li>
          <li className="liStyleHeader">Phone</li>
          <li className="liStyleHeader">Status</li>
          <li className="liStyleHeader">Trained In</li>
          <li className="liStyleHeader">Assigned Clients</li>
          <li className="liStyleHeader">Spare Hours Available</li>
          <li className="liStyleHeader">Actions</li>
        </ul>
        {this.props.technicians.map((tech) => (
        <ListTechnician 
          key={tech.number} 
          tech={tech} 
          delTech={this.props.delTech} 
          updateTechnician={this.props.updateTechnician}
        />
        ))}
      </div>
    )
  } 
}

Tech.propTypes = {
    technicians: PropTypes.array.isRequired,
    delTech: PropTypes.array.isRequired,
    updateTechnician: PropTypes.array.isRequired,
}

export default Tech;