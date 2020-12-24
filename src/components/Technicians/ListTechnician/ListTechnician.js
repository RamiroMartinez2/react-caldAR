import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListTechnician.css';
import { BiPencil } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';

export class ListTechnician extends Component{
    state = {...this.props.tech, isEditing: false};

    toggleEdit = () => {
        this.setState( { isEditing: !this.state.isEditing } );
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    saveChanges = () => {
        this.toggleEdit();
        this.props.updateTechnician(this.state);
    }

    render() {
        const {number} = this.props.tech;
        if (this.state.isEditing){
            return(
                <ul className="showForm">
                    <input className="inputStyleEdt"
                        type="text" 
                        name="Number" 
                        value={this.state.number}
                        readOnly
                    ></input>
                    <input className="inputStyleEdt"
                        type="text" 
                        name="fullName" 
                        placeholder=" Add Name"
                        value={this.state.fullName}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="email" 
                        name="email" 
                        placeholder=" Add Email"
                        value={this.state.email}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="number" 
                        name="phone" 
                        placeholder=" Add Phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="text" 
                        name="statusActive" 
                        placeholder=" Add Status"
                        value={this.state.statusActive}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="text" 
                        name="trained" 
                        placeholder=" Add Trained Skills"
                        value={this.state.trained}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="number" 
                        name="assignedClients" 
                        placeholder=" Add Asigned Clients"
                        value={this.state.assignedClients}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="number" 
                        name="spareHoursAvailable" 
                        placeholder=" Add Spare Hours Available"
                        value={this.state.spareHoursAvailable}
                        onChange={this.onChange}
                    ></input>
                    <div>
                        <button onClick={this.toggleEdit} className="Btn"><FcCancel /></button>
                        <button onClick={this.saveChanges} className="Btn"><AiOutlineCheckCircle/></button>
                    </div>
                </ul>
            )
        }
        return (
            <ul className="showForm">
                <li className="liStyle">{ this.props.tech.number }</li>
                <li className="liStyle">{ this.props.tech.fullName }</li>
                <li className="liStyle">{ this.props.tech.email }</li>
                <li className="liStyle">{ this.props.tech.phone }</li>
                <li className="liStyle">{ this.props.tech.statusActive }</li>
                <li className="liStyle">{ this.props.tech.trained }</li>
                <li className="liStyle">{ this.props.tech.assignedClients }</li>
                <li className="liStyle">{ this.props.tech.spareHoursAvailable }</li>
                <div>
                    <button onClick={this.props.delTech.bind(this, number)} className="Btn"><GoTrashcan/></button>
                    <button onClick={this.toggleEdit} className="Btn"><BiPencil/></button> 
                </div>    
            </ul>  
        )
    }
}

ListTechnician.propTypes = {
    tech: PropTypes.object.isRequired,
    delTech: PropTypes.array.isRequired,
    updateTechnician: PropTypes.array.isRequired,
}

export default ListTechnician