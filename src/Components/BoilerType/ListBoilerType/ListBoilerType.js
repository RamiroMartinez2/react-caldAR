import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import './ListBoilerType.css';

export class ListBoilerType extends Component {
  state = { ...this.props.list, isEditing: false };
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  saveChanges = () => {
    this.toggleEdit();
    this.props.updateBoiler(this.state);
  };

  render() {
    const { id } = this.props.list;
    if (this.state.isEditing) {
      return (
        <ul className="showForm">
          <input
            className="inputStyle"
            type="text"
            name="skillsId"
            placeholder="Skills ID"
            value={this.state.skillsId}
            onChange={this.onChange}
          ></input>
          <input
            className="inputStyle"
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChange}
          ></input>
          <input
            className="inputStyle"
            type="text"
            name="stock"
            placeholder="Stock"
            value={this.state.stock}
            onChange={this.onChange}
          ></input>
          <div>
            <button onClick={this.toggleEdit} className="Btn"><FcCancel /></button>
            <button onClick={this.saveChanges} className="Btn"><AiOutlineCheckCircle/></button>
          </div>
        </ul>
      );
    }

    return (
      <div>
        <ul className="showForm">
          <li className="liStyle">{this.props.list.id}</li>
          <li className="liStyle">{this.props.list.skillsId}</li>
          <li className="liStyle">{this.props.list.description}</li>
          <li className="liStyle">{this.props.list.stock}</li>
          <button           
            onClick={this.props.delBoild.bind(this, id)} className="Btn"><MdDelete/>            
          </button>
          <button onClick={this.toggleEdit} className="Btn"><AiFillEdit/>
          </button>
        </ul>
      </div>
    );
  }
}

ListBoilerType.propTypes = {
  list: PropTypes.object.isRequired,
  delBoild: PropTypes.array.isRequired,
  updateBoiler: PropTypes.array.isRequired
}
export default ListBoilerType