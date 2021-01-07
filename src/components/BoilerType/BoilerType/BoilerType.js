import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./BoilerType.module.css";
import { GoTrashcan } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { BiPencil } from "react-icons/bi";
import Modal from "../../Modal/Modal";

const BoilerType = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [boilerType, setBoilerType] = useState({ ...props.boilerType });
  const [openModal, setOpenModal] = useState(false);

  const cancelClick = () => {
    toggleEditing();
    setBoilerType(props.boilerType);
  }

  const toggleEdit = () => {
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
          type="text"
          name="id"
          value={boilerType._id}
          readOnly
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
          name="descriptions"
          placeholder="Description"
          value={boilerType.descriptions}
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
        <div className={style.btnGroup}>
          <button onClick={cancelClick} className={style.Btn}>
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
        <li className={style.liStyle}>{props.boilerType._id}</li>
        <li className={style.liStyle}>{props.boilerType.skillsId}</li>
        <li className={style.liStyle}>{props.boilerType.descriptions}</li>
        <li className={style.liStyle}>{props.boilerType.stock}</li>
        <div>
        <button className={style.Btn} onClick={() => setOpenModal(true)}><GoTrashcan /></button>
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <p className={style.msgConfirm}>Are you sure you want to delete ?</p>
            <button className={style.btnSubmit} onClick={() => props.deleteBoilerType(props.boilerType._id)}>{" "}Confirm{" "}</button>
            <button className={style.btnSubmit} onClick={() => setOpenModal(false)}>{" "}Cancel{" "}</button>
          </Modal>
      <button onClick={toggleEdit} className={style.Btn}><BiPencil/></button>
      </div>
      </ul>
    </div>
  );
};

BoilerType.propTypes = {
  boilerType: PropTypes.object.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
};


export default BoilerType;