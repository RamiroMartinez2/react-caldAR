import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./BoilerType.module.css";
import { GoTrashcan } from "react-icons/go";
import { BiPencil } from "react-icons/bi";
import Modal from "../../Modal/Modal";
import { Form, Field } from "react-final-form";
import {
  required,
  composeValidators,
  stock } from "../../../utils/validations";

const BoilerType = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [boilerType, setBoilerType] = useState({ ...props.boilerType });
  const [openModal, setOpenModal] = useState(false);

  const cancelClick = () => {
    toggleEditing();
    setBoilerType(props.boilerType);
    setOpenModal(false)
  }

  const toggleEdit = () => {
    toggleEditing(!isEditing);
    setOpenModal(true);
  };

  const onChange = (e) => {
    setBoilerType({ ...boilerType, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.setOpenModal(false);
  };

  const saveChanges = () => {
    props.editBoilerType(boilerType);
    toggleEdit();
  };

  if (isEditing) {
    return (
      <Modal title="Editing Technician" openModal={openModal} setOpenModal={setOpenModal}>
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form className={style.formStyle} onSubmit={handleSubmit}>
              <div>
                  <label>Status</label>
                  <Field name="statusActive" component="select" >
                      <option></option>
                      <option>Active</option>
                      <option>Inactive</option>
                  </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="descriptions" placeholder="Descriptions" validate={required}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Descriptions</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={boilerType.descriptions}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="stock" placeholder="Stock" validate={composeValidators(required, stock)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Stock</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={boilerType.stock}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.touched && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <button type="submit" disabled={submitting} className={style.BtnModCheck} onClick={saveChanges}>Confirm</button>
                  <button className={style.BtnModCancel} onClick={cancelClick}>Cancel</button>
            </form>
          )}
        </Form>
      </Modal>
    );
  }

  return (
    <div>
      <ul className={style.showForm}>
        <li className={style.liStyle}>{props.boilerType._id}</li>
        <li className={style.liStyle}>{props.boilerType.skillsId}</li>
        <li className={style.liStyle}>{props.boilerType.descriptions}</li>
        <li className={style.liStyle}>{props.boilerType.stock}</li>
        <div className={style.btnGroup}>
        <button onClick={toggleEdit} className={style.Btn}><BiPencil/></button>
        <button className={style.Btn} onClick={() => setOpenModal(true)}><GoTrashcan /></button>
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <p className={style.msgConfirm}>Are you sure you want to delete ?</p>
            <button className={style.btnSubmit} onClick={() => props.deleteBoilerType(props.boilerType._id)}>{" "}Confirm{" "}</button>
            <button className={style.btnSubmit} onClick={() => setOpenModal(false)}>{" "}Cancel{" "}</button>
          </Modal>
      </div>
      </ul>
    </div>
  );
};

BoilerType.propTypes = {
  boilerType: PropTypes.object.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};


export default BoilerType;