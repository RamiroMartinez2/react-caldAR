import React, { Component } from 'react';
import styles from './AddBoiler.module.css';
import PropTypes from 'prop-types';

export class AddBoiler extends Component {
    state = {
        typeId:'',
        maintaince_rate:'',
        hour_maintaince_cost:'',
        hour_eventual_cost:''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBoiler(this.state);
        this.setState({
            typeId:'',
            maintaince_rate:'',
            hour_maintaince_cost:'',
            hour_eventual_cost:''
        });
    }
    render() {
        return (
            <form className={styles.addForm} onSubmit={this.onSubmit}>
                <input className={styles.inputStyle}
                    type="text" 
                    name="typeId" 
                    placeholder="Add Type ID..." 
                    value={this.state.typeId}
                    onChange={this.onChange}
                    required
                />
                <input className={styles.inputStyle}
                    type="text" 
                    name="maintaince_rate" 
                    placeholder="Add Maintaince Rate:..." 
                    value={this.state.maintaince_rate}
                    onChange={this.onChange}
                    required
                />
                <input className={styles.inputStyle}
                    type="number" 
                    name="hour_maintaince_cost" 
                    placeholder="Add Hour Maintaince Cost..." 
                    value={this.state.hour_maintaince_cost}
                    onChange={this.onChange}
                    required
                />
                <input className={styles.inputStyle}
                    type="number" 
                    name="hour_eventual_cost" 
                    placeholder="Add Hour Eventual Cost..." 
                    value={this.state.hour_eventual_cost}
                    onChange={this.onChange}
                    required
                />
                <input className={styles.btnSubmit}
                    type="submit" 
                    value="Add new boiler" 
                />
            </form>
        )
    }
}
AddBoiler.propTypes = {
    addBoiler: PropTypes.array.isRequired,
}
export default AddBoiler