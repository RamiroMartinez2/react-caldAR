import React, { useState } from "react";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";
import { BiPencil } from "react-icons/bi";
import style from "./ListAppointment.module.css";
import Modal from "../../Modal/Modal";
import { Form, Field } from "react-final-form";
import {required,
        composeValidators,
        number,
        hours} from "../../../utils/appointmentsValidations"


const ListAppointment = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [appointments, setAppointment] = useState({ ...props.appointments });
  const [openModal, setOpenModal] = useState(false);

  const cancelClick = () => {
    toggleEditing();
    setAppointment(props.appointments);
    setOpenModal(false)
  };

  const toggleEdit = () => {
    toggleEditing(!isEditing);
    setOpenModal(true);
  };

  const onChange = (e) => {
    setAppointment({ ...appointments, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.setOpenModal(false);
  };

  const saveChanges = () => {
    toggleEdit();
    props.updateAppointment(appointments);
  };

if (isEditing) {
    return (
      <Modal title="Editing Appointment" openModal={openModal} setOpenModal={setOpenModal}>
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form className={style.formStyle} onSubmit={handleSubmit}>
              <div className={style.columnfile}>
                <div className={style.columnA}>
                  <div className={style.lineGroup}>
                    <Field 
                    name="buildingId"
                    placeholder="Building Id"
                    validate={composeValidators(required,number)}
                    >
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Building Id</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={appointments.buildingId}
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
                    <Field 
                      name="boilerId"
                      placeholder="Boiler Id"
                      validate={composeValidators(required,number)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Boiler Id</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={appointments.boilerId}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.dirty && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field 
                      name="date"
                      placeholder="Date"
                      validate={required}
                      component="date">
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Date</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={appointments.date}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.dirty && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  
                </div>
                <div className={style.columnA}>
                  <div className={style.lineGroup}>
                    <Field 
                      name="estimatedTime"
                      placeholder="Estimated Time"
                      validate={composeValidators(required,hours)}
                    >
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Estimated Time</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={appointments.estimatedTime}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.dirty && <div className={style.errorDiv}><span className={style.errorMsg}>{meta.error}</span></div>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <label>Maintenance Type</label>
                    <Field name="maintenanceType" component="select">
                      <option></option>
                      <option>Regular</option>
                      <option>Eventual</option>
                    </Field>                  
                  </div>
                  <button type="submit" disabled={submitting} className={style.BtnModCheck} onClick={saveChanges}>Confirm</button>
                  <button className={style.BtnModCancel} onClick={cancelClick}>Cancel</button>
                </div>
              </div>
            </form>
          )}
        </Form>
      </Modal>
    );
  }
  return (
    <div>
      <ul className="showForm">
        <li className={style.liStyle}>{props.appointments._id}</li>
        <li className={style.liStyle}>{props.appointments.buildingId}</li>
        <li className={style.liStyle}>{props.appointments.boilerId}</li>
        <li className={style.liStyle}>{props.appointments.date}</li>
        <li className={style.liStyle}>{props.appointments.estimatedTime}</li>
        <li className={style.liStyle}>{props.appointments.maintenanceType}</li>
        <div>
          <button onClick={toggleEdit} className={style.Btn}>
            <BiPencil />
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className={style.Btn}
          >
            <GoTrashcan />
          </button>
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <p className={style.msgConfirm}>Are you sure you want to delete ?</p>
            <button className={style.btnSubmit} onClick={() => props.deleteAppointment(props.appointments._id)}>{" "}Confirm{" "}</button>
            <button className={style.btnSubmit} onClick={() => setOpenModal(false)}>{" "}Cancel{" "}</button>
          </Modal>
        </div>
      </ul>
    </div>
  );
};

ListAppointment.propTypes = {
  appointments: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  updateAppointment: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ListAppointment;

