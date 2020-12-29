import React from 'react';
import Header from "../HeaderBoilerType/HeaderBoilerType"
import BoilerType from "../BoilerType/BoilerType";
import AddBoilerType from "../AddBoilerType/AddBoilerType";
import { connect } from "react-redux";
import style from "./MainBoilerType.module.css"
import PropTypes from 'prop-types';

const MainBoilerType = (props) => {
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header />
        <BoilerType
          boilerTypes={props.boilerTypes}
        />
        <AddBoilerType />
      </div>
    </div>
  );
}
MainBoilerType.propTypes = {
  boilerTypes: PropTypes.array.isRequired,
}

const mapStateToProps = ({boilerTypes}) => {
  return {boilerTypes};
}

export default connect(mapStateToProps)(MainBoilerType);