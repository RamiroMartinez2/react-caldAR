import React, { useState } from "react";
import "./AddBuilding.css";
import PropTypes from "prop-types";
import { addBuilding as addBuildingAction } from "../../../redux/actions/buildingAction";
import { connect } from "react-redux";

const AddBuilding = (props) => {
  const [building, setNewBuilding] = useState({
    address: "",
    boilersId: "",
    fullName: "",
    phone: "",
  });

  const onChange = (e) =>
    setNewBuilding({ ...building, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBuilding(building);
    setNewBuilding({
      address: "",
      boilersId: "",
      fullName: "",
      phone: "",
    });
  };

  return (
    <form className="addForm" onSubmit={onSubmit}>
      <input
        className="inputStyle"
        type="text"
        name="address"
        placeholder="Address"
        value={building.address}
        onChange={onChange}
      ></input>
      <input
        className="inputStyle"
        type="number"
        name="boilersId"
        placeholder="Boiler Type"
        value={building.boilersId}
        onChange={onChange}
      ></input>
      <input
        className="inputStyle"
        type="text"
        name="fullName"
        placeholder="Name"
        value={building.fullName}
        onChange={onChange}
      ></input>
      <input
        className="inputStyle"
        type="text"
        name="phone"
        placeholder="Phone"
        value={building.phone}
        onChange={onChange}
      ></input>
      <input className="btnSubmit" type="submit" value="Add New"></input>
    </form>
  );
};

AddBuilding.propTypes = {
  addBuilding: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBuilding: (content) => dispatch(addBuildingAction(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    buildings: state.buildings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBuilding);
