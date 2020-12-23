import React, { Component } from 'react';
import Header from '../HeaderBoiler/Header';
import Boilers from '../Boilers/Boilers';
import AddBoilers from '../AddBoiler/AddBoiler';
import mockBoilers from '../../../Mock/mockBoilers.json';
import styles from './MainBoiler.module.css';

class MainBoiler extends Component {
  state = {mockBoilers}

  delBoiler = (id) => {
    this.setState({ mockBoilers: [...this.state.mockBoilers.filter(boil => boil.id !== id)] });
  }

  updateBoiler = (boilUpdated) => {
    this.setState({
      mockBoilers: [...this.state.mockBoilers.map(boil => {
        if(boil.id === boilUpdated.id) {
          boil = boilUpdated;
        }
        return boil;
      })]
    });
  }

  addBoiler = ({typeId, maintaince_rate, hour_maintaince_cost, hour_eventual_cost}) => {
    const newBoil = {
      id: Math.floor(Math.random() * 101),
      typeId,
      maintaince_rate,
      hour_maintaince_cost,
      hour_eventual_cost,
    } 
    this.setState({mockBoilers: [...this.state.mockBoilers, newBoil]})
  }
  
  render (){
    return (
      <div className={styles.Main}>
        <div className={styles.Container}>
          <Header />
          <Boilers boilers={this.state.mockBoilers} 
          delBoiler={this.delBoiler} 
          updateBoiler={this.updateBoiler} 
          />
          <AddBoilers addBoiler={this.addBoiler} />
        </div>
      </div>
    );
  }
}

export default MainBoiler