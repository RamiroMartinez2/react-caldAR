import React from "react";
import Header from "../HeaderBoiler/Header";
import Boilers from "../Boilers/Boilers";
import AddBoiler from "../AddBoiler/AddBoiler";
import { connect } from "react-redux";
import styles from "./MainBoiler.module.css";
import PropTypes from "prop-types";

const MainBoiler = (props) => {
  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <Header />
        <Boilers boilers={props.boilers} />
        <AddBoiler />
      </div>
    </div>
  );
};

MainBoiler.propTypes = {
  boilers: PropTypes.array.isRequired,
};

const mapStateToProps = ({ boilers }) => {
  return { boilers };
};

export default connect(mapStateToProps)(MainBoiler);
