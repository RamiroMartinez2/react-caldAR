import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Items.module.css";
import { BiPencil } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import Modal from "../../Modal/Modal";
import { Form, Field } from 'react-final-form';
import {required,
  composeValidators,
  hour_maintaince_cost,
  hour_eventual_cost} from '../../../utils/validations';


const Items = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [boiler, setBoiler] = useState({ ...props.boiler });
  const [openModal, setOpenModal] = useState(false);


  const cancelClick = () => {
    toggleEditing();
    setBoiler(props.boiler);
    setOpenModal(false)
  }

  const toggleEdit = () => {
    toggleEditing(!isEditing);
    setOpenModal(true);
  }

  const onChange = (e) => {
    setBoiler({...boiler, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    props.setOpenModal(false);
  };
  const saveChanges = () => {
    props.editBoiler(boiler);
    toggleEdit();
  }

  if (isEditing) {
    return (
      <Modal title="Editing Boiler" openModal={openModal} setOpenModal={setOpenModal}>
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form className={styles.formStyle} onSubmit={handleSubmit}>
              <div className={styles.columnfile}>
                <div className={styles.columnA}>
                  <div className={styles.lineGroup}>
                    <div>
                      <label>Type Id</label>
                      <Field name="typeId" component="select" >
                        <option></option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                      </Field>
                    </div>
                  </div>
                  <div className={styles.lineGroup}>
                    <Field name="maintaince_rate" placeholder="Maintaince Rate" validate={required}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Maintaince Rate</label>
                          <input {...input} className={styles.inputStyle} placeholder={placeholder} value={boiler.maintaince_rate}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.touched && <div className={styles.errorDiv}><span className={styles.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={styles.lineGroup}>
                    <Field name="hour_maintaince_cost" placeholder="Hour Maintaince Cost" validate={composeValidators(required,hour_maintaince_cost)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Hour Maintaince Cost</label>
                          <input {...input} className={styles.inputStyle} placeholder={placeholder} value={boiler.hour_maintaince_cost}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.touched && <div className={styles.errorDiv}><span className={styles.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={styles.lineGroup}>
                    <Field name="hour_eventual_cost" placeholder="Hour Eventual Cost" validate={composeValidators(required,hour_eventual_cost)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Hour Eventual Cost</label>
                          <input {...input} className={styles.inputStyle} placeholder={placeholder} value={boiler.hour_eventual_cost}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.touched && <div className={styles.errorDiv}><span className={styles.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <button type="submit" disabled={submitting} className={styles.BtnModCheck} onClick={saveChanges}>Confirm</button>
                  <button className={styles.BtnModCancel} onClick={cancelClick}>Cancel</button>
                </div>
              </div>
            </form>
          )}
        </Form>
      </Modal>
    );
  }
  return (
    <ul className={styles.showForm}>
      <li className={styles.liStyle}>{props.boiler._id}</li>
      <li className={styles.liStyle}>{props.boiler.typeId}</li>
      <li className={styles.liStyle}>{props.boiler.maintaince_rate}</li>
      <li className={styles.liStyle}>{props.boiler.hour_maintaince_cost}</li>
      <li className={styles.liStyle}>{props.boiler.hour_eventual_cost}</li>
      <div>
        <button onClick={toggleEdit} className={styles.Btn}><BiPencil/></button>
        <button className={styles.Btn} onClick={() => setOpenModal(true)}><GoTrashcan /></button>
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <p className={styles.msgConfirm}>Are you sure you want to delete ?</p>
            <button className={styles.btnSubmit} onClick={() => props.deleteBoiler(props.boiler._id)}>{" "}Confirm{" "}</button>
            <button className={styles.btnSubmit} onClick={() => setOpenModal(false)}>{" "}Cancel{" "}</button>
          </Modal>
      </div>
    </ul>
  );
}
Items.propTypes = {
  boiler: PropTypes.object.isRequired,
  deleteBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Items;