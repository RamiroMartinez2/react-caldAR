import React, { useState } from "react";
import "./ListBuildings.css";
import PropTypes from "prop-types";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

const ListBuildings = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [building, setBuilding] = useState({ ...props.building });

  const toggleEdit = () => {
    setBuilding(props.building);
    toggleEditing(!isEditing);
  };

  const onChange = (e) => {
    setBuilding({ ...building, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateBuilding(building);
  };

  if (isEditing) {
    return (
      <ul className="showForm">
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
          name="boilerID"
          placeholder="Boiler Type"
          value={building.boilerID}
          onChange={onChange}
        ></input>
        <input
          className="inputStyle"
          type="text"
          name="fullname"
          placeholder="Name"
          value={building.fullname}
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
        <div>
          <button onClick={toggleEdit} className="Btn">
            <FcCancel />
          </button>
          <button onClick={saveChanges} className="Btn">
            <AiOutlineCheckCircle />
          </button>
        </div>
      </ul>
    );
  }

  return (
    <div>
      <ul className="showForm">
        <li className="liStyle">{props.building._id}</li>
        <li className="liStyle">{props.building.address}</li>
        <li className="liStyle">{props.building.boilerID}</li>
        <li className="liStyle">{props.building.fullname}</li>
        <li className="liStyle">{props.building.phone}</li>
        <div>
          <button
            onClick={() => props.delBuilding(props.building._id)}
            className="Btn"
          >
            <GoTrashcan />
          </button>
          <button onClick={toggleEdit} className="Btn">
            <BiPencil />
          </button>
        </div>
      </ul>
    </div>
  );
};

ListBuildings.propTypes = {
  building: PropTypes.object.isRequired,
  delBuilding: PropTypes.array.isRequired,
  updateBuilding: PropTypes.array.isRequired,
};

export default ListBuildings;
