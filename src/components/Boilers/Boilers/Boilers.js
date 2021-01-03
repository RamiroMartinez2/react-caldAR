import React from "react";
import Items from "../Items/Items";
import styles from "./Boilers.module.css";
import PropTypes from "prop-types";

const Boilers = (props) => {

  const items = props.boilers.map((boiler) => (
    <Items
      key={boiler.id} 
      boiler={boiler}
      deleteBoiler={props.deleteBoiler}
      editBoiler={props.editBoiler}
    />
  ));
  return (
    <div>
      <ul className={styles.ulStyle}>
        <li className={styles.liStyleHeader}>Id</li>
        <li className={styles.liStyleHeader}>Type Id</li>
        <li className={styles.liStyleHeader}>Maintaince Rate</li>
        <li className={styles.liStyleHeader}>Hour Maintaince Cost</li>
        <li className={styles.liStyleHeader}>Hour Eventual Cost</li>
        <li className={styles.liStyleHeader}>Actions</li>
      </ul>
      {items}
    </div>
  );
}

Boilers.propTypes = {
  boilers: PropTypes.array.isRequired,
  deleteBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
};

export default Boilers;