import React, {Component} from 'react';
import Items from '../Items/Items';
import styles from './Boilers.module.css';
import PropTypes from 'prop-types';

class Boilers extends Component {
  render(){
    return(
      <div>
        <ul className={styles.ulStyle}>
          <li className={styles.liStyleHeader}>Id</li>
          <li className={styles.liStyleHeader}>Type Id</li>
          <li className={styles.liStyleHeader}>Maintaince Rate</li>
          <li className={styles.liStyleHeader}>Hour Maintaince Cost</li>
          <li className={styles.liStyleHeader}>Hour Eventual Cost</li>
        </ul>
        {this.props.boilers.map((boil) => (
        <Items 
        key={boil.id} 
        boil={boil}  
        delBoiler={this.props.delBoiler} 
        updateBoiler={this.props.updateBoiler}
        />
        ))}
      </div>
    )
  } 
}

Boilers.propTypes = {
    boilers: PropTypes.array.isRequired,
    delBoiler: PropTypes.array.isRequired,
    updateBoiler: PropTypes.array.isRequired,
  }
  export default Boilers