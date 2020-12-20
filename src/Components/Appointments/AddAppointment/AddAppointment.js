import React, { Component } from 'react'
import './AddAppointment.css';

export class AddAppointment extends Component {
    state = {
        id: '',
        buildingId: '',
        boilerId: '',
        date: '',
        estimatedTime: '',
        maintenanceType: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addAppointment(this.state);
        this.setState(
            {
                id: '',
                buildingId: '',
                boilerId: '',
                date: '',
                estimatedTime: '',
                maintenanceType: ''
            });
    }

    onChange = (e) => {this.setState({ [e.target.name]: e.target.value })}

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input className="inputStyle"
                    type="number" 
                    name="id" 
                    placeholder="Id"          
                    value={this.state.id}
                    onChange={this.onChange}
                    required
                ></input>
                <input className="inputStyle"
                    type="number" 
                    name="buildingId" 
                    placeholder="Building Id"
                    value={this.state.buildingId}
                    onChange={this.onChange}
                    required
                ></input>
                <input className="inputStyle"
                    type="number" 
                    name="boilerId" 
                    placeholder="Boiler Id"
                    value={this.state.boilerId}
                    onChange={this.onChange}
                    required
                ></input>
                <input className="dateStyle"
                    type="date" 
                    name="date" 
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.onChange}
                    required
                ></input>
                <input className="inputStyle"
                    type="number" 
                    name="estimatedTime" 
                    placeholder="Estimated Time"
                    value={this.state.estimatedTime}
                    onChange={this.onChange}
                    required
                ></input>
                <input className="inputStyle"
                    type="text" 
                    name="maintenanceType" 
                    placeholder="Maintenance Type"
                    value={this.state.maintenanceType}
                    onChange={this.onChange}
                    required
                ></input>                
                <input className="btnSubmit"
                    type="submit" 
                    value="Add Appointment"      
                ></input>
            </form>
        )
    }
}

export default AddAppointment
