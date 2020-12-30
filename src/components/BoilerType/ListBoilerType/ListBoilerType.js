import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { BiPencil } from "react-icons/bi";
import style from "./ListBoilerType.module.css";
import {
  deleteBoilerType,
  editBoilerType,
} from "../../../redux/actions/boilerTypeActions";

const ListBoilerType = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [boilerType, setBoilerType] = useState({ ...props.boilerType });

  const toggleEdit = () => {
    setBoilerType(props.boilerType);
    toggleEditing(!isEditing);
  };
  const onChange = (e) => {
    setBoilerType({ ...boilerType, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    toggleEdit();
    props.editBoilerType(boilerType);
  };

  if (isEditing) {
    return (
      <ul className={style.showForm}>
        <input
          className={style.inputStyle}
          type="number"
          name="id"
          placeholder="Id"
          value={boilerType.id}
          onChange={onChange}
          required
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="skillsId"
          placeholder="Skills ID"
          value={boilerType.skillsId}
          onChange={onChange}
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="description"
          placeholder="Description"
          value={boilerType.description}
          onChange={onChange}
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="stock"
          placeholder="Stock"
          value={boilerType.stock}
          onChange={onChange}
        ></input>
        <div>
          <button onClick={toggleEdit} className={style.Btn}>
            <FcCancel />
          </button>
          <button onClick={saveChanges} className={style.Btn}>
            <AiOutlineCheckCircle />
          </button>
        </div>
      </ul>
    );
  }

  return (
    <div>
      <ul className={style.showForm}>
        <li className={style.liStyle}>{props.boilerType.id}</li>
        <li className={style.liStyle}>{props.boilerType.skillsId}</li>
        <li className={style.liStyle}>{props.boilerType.description}</li>
        <li className={style.liStyle}>{props.boilerType.stock}</li>
        <button onClick={toggleEdit} className={style.Btn}>
          <BiPencil />
        </button>
        <button
          onClick={() => props.deleteBoilerType(props.boilerType.id)}
          className={style.Btn}
        >
          <GoTrashcan />
        </button>
      </ul>
    </div>
  );
};

ListBoilerType.propTypes = {
  boilerType: PropTypes.object.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoilerType: (id) => dispatch(deleteBoilerType(id)),
    editBoilerType: (content) => dispatch(editBoilerType(content)),
  };
};

const mapStateToProps = (state) => {
  return {
    boilerTypes: state.boilerTypes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBoilerType);
