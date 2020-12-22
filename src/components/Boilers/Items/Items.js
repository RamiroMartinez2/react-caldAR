import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Items.module.css';
import { BiPencil } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';

export class Items extends Component {
    state = {...this.props.boil, isEditing: false};

    toggleEdit = () => {
        this.setState( { isEditing: !this.state.isEditing } );
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    saveChanges = () => {
        this.toggleEdit();
        this.props.updateBoiler(this.state);
    }
    render (){
        const { id } = this.props.boil;
        if (this.state.isEditing){
            return(
                <ul className={styles.showForm}>
                <input className={styles.inputStyleEdt}
                        type="text" 
                        name="id" 
                        value={this.state.id}
                        readOnly
                    ></input>
                    <input className={styles.inputStyleEdt}
                        type="text" 
                        name="typeId" 
                        placeholder={this.state.typeId}
                        value={this.state.typeId.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <input className={styles.inputStyleEdt}
                        type="text" 
                        name="maintaince_rate" 
                        placeholder={this.state.maintaince_rate}
                        value={this.state.maintaince_rate.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <input className={styles.inputStyleEdt}
                        type="number" 
                        name="hour_maintaince_cost" 
                        placeholder={this.state.hour_maintaince_cost}
                        value={this.state.hour_maintaince_cost.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <input className={styles.inputStyleEdt}
                        type="number" 
                        name="hour_eventual_cost" 
                        placeholder={this.state.hour_eventual_cost}
                        value={this.state.hour_eventual_cost.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <div>
                        <button onClick={this.toggleEdit} className={styles.Btn}><FcCancel /></button>
                        <button onClick={this.saveChanges} className={styles.Btn}><AiOutlineCheckCircle/></button>
                    </div>
                    </ul>
            )
        }
        return (
        <ul className={styles.showForm}>
            <li className={styles.liStyle}>{ this.props.boil.id }</li>
            <li className={styles.liStyle}>{ this.props.boil.typeId }</li>
            <li className={styles.liStyle}>{ this.props.boil.maintaince_rate }</li>
            <li className={styles.liStyle}>${ this.props.boil.hour_maintaince_cost }</li>
            <li className={styles.liStyle}>${ this.props.boil.hour_eventual_cost }</li>
            <div>
                <button onClick={this.props.delBoiler.bind(this, id)} className={styles.Btn}><GoTrashcan/></button>
                <button onClick={this.toggleEdit} className={styles.Btn}><BiPencil/></button>
            </div>    
        </ul>
        )
    }
}
Items.propTypes = {
    boil: PropTypes.object.isRequired,
    delBoiler: PropTypes.array.isRequired,
    updateBoiler: PropTypes.array.isRequired,
}

export default Items