import React, {Component} from 'react';
import Tech from '../Tech/Tech';
import AddTechnician from '../AddTechnician/AddTechnician';
import HeaderTechnician from '../HeaderTechnician/HeaderTechnician';
import mockTechnicians from '../../../mock/mocksTechnician.json';
import nextId from 'react-id-generator';
import './MainTechnician.css';

class MainTechnician extends Component {
  state = {mockTechnicians}
  
  delTech = (number) =>{
    this.setState({mockTechnicians: [...this.state.mockTechnicians.filter(tech => tech.number !== number)] })
  }

  updateTechnician = (techUpdated) => {
    this.setState({
      mockTechnicians: [...this.state.mockTechnicians.map(tech => {
        if(tech.number === techUpdated.number) {
          tech = techUpdated;
        }
        return tech;
      })]
    });
  }

  addTech = ({fullName, email, phone, statusActive, trained, assignedClients, spareHoursAvailable}) => {
    const newTech = {
      number: nextId(),
      fullName,
      email,
      phone,
      statusActive,
      trained,
      assignedClients,
      spareHoursAvailable
    }
    this.setState({mockTechnicians: [...this.state.mockTechnicians, newTech]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <HeaderTechnician />
          <Tech 
            technicians={this.state.mockTechnicians} 
            delTech={this.delTech} 
            updateTechnician={this.updateTechnician} 
          />
          <AddTechnician  addTech={this.addTech}/>
        </div>
      </div>
    );
  } 
}

export default MainTechnician;