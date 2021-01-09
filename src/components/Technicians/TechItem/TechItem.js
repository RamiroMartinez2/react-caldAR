import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./TechItem.module.css";
import { BiPencil } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import Modal from "../../Modal/Modal";
import { Form, Field } from "react-final-form";
import {
  required,
  composeValidators,
  email,
  phone,
  clients,
  hours} from "../../../utils/validations";

const TechItem = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [tech, setTech] = useState({ ...props.tech });
  const [openModal, setOpenModal] = useState(false);

  const cancelClick = () => {
    toggleEditing();
    setTech(props.tech);
    setOpenModal(false)
  };

  const toggleEdit = () => {
    toggleEditing(!isEditing);
    setOpenModal(true);
  };

  const onChange = (e) => {
    setTech({ ...tech, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.setOpenModal(false);
  };

  const saveChanges = () => {
    props.updateTechnician(tech);
    toggleEdit();
  };

  if (isEditing) {
    return (
      <Modal title="Editing Technician" openModal={openModal} setOpenModal={setOpenModal}>
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form className={style.formStyle} onSubmit={handleSubmit}>
              <div className={style.columnfile}>
                <div className={style.columnA}>
                  <div className={style.lineGroup}>
                    <Field name="fullName" placeholder="Full Name" validate={required}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Full Name</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={tech.fullName}
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
                    <Field name="email" placeholder="Email" validate={composeValidators(required,email)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Email</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={tech.email}
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
                    <Field name="phone" placeholder="Phone" validate={composeValidators(required, phone)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Phone</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={tech.phone}
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
                  <div>
                    <label>Status</label>
                    <Field name="statusActive" component="select">
                      <option>-</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </Field>
                  </div>
                </div>
                <div className={style.columnA}>
                  <div className={style.lineGroup}>
                    <Field name="trained" placeholder="Trained Skills" validate={required}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Trained Skills</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={tech.trained}
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
                    <Field name="assignedClients" placeholder="Assigned Clients" validate={composeValidators(required,clients)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Assigned Clients</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={tech.assignedClients}
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
                    <Field name="spareHoursAvailable" placeholder="Hours Available" validate={composeValidators(required, hours)}>
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Hours Available</label>
                          <input {...input} className={style.inputStyle} placeholder={placeholder} value={tech.spareHoursAvailable}
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
                </div>
              </div>
            </form>
          )}
        </Form>
      </Modal>
    );
  }
  return (
    <ul className={style.showForm}>
      <li className={style.liStyle}>{props.tech._id}</li>
      <li className={style.liStyle}>{props.tech.fullName}</li>
      <li className={style.liStyle}>{props.tech.email}</li>
      <li className={style.liStyle}>{props.tech.phone}</li>
      <li className={style.liStyle}>{props.tech.statusActive}</li>
      <li className={style.liStyle}>{props.tech.trained}</li>
      <li className={style.liStyle}>{props.tech.assignedClients}</li>
      <li className={style.liStyle}>{props.tech.spareHoursAvailable}</li>
      <div>
        <button onClick={toggleEdit} className={style.Btn}><BiPencil/></button>
        <button className={style.Btn} onClick={() => setOpenModal(true)}><GoTrashcan /></button>
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <p className={style.msgConfirm}>Are you sure you want to delete ?</p>
            <button className={style.btnSubmit} onClick={() => props.deleteTechnician(props.tech._id)}>{" "}Confirm{" "}</button>
            <button className={style.btnSubmit} onClick={() => setOpenModal(false)}>{" "}Cancel{" "}</button>
          </Modal>
      </div>
    </ul>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
  updateTechnician: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default TechItem;