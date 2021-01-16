import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Item.module.css";
import { BiPencil } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import Modal from "../../Modal/Modal";
import { Form, Field } from "react-final-form";
import { required, composeValidators, email } from "../../../utils/validations";

const Item = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [customer, setCustomer] = useState({ ...props.customer });
  const [openModal, setOpenModal] = useState(false);

  const cancelClick = () => {
    toggleEditing();
    setCustomer(props.customer);
    setOpenModal(false);
  };

  const toggleEdit = () => {
    toggleEditing(!isEditing);
    setOpenModal(true);
  };

  const onChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    props.setOpenModal(false);
  };

  const saveChanges = () => {
    props.updateCustomer(customer);
    toggleEdit();
  };

  if (isEditing) {
    return (
      <Modal
        title="Editing Customer"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form className={style.formStyle} onSubmit={handleSubmit}>
              <div className={style.columnfile}>
                <div className={style.columnA}>
                  <div>
                    <label>Customer Type</label>
                    <Field name="customerType" component="select">
                      <option></option>
                      <option>Particular</option>
                      <option>Business</option>
                    </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field
                      name="email"
                      placeholder="Email"
                      validate={composeValidators(required, email)}
                    >
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Email</label>
                          <input
                            {...input}
                            className={style.inputStyle}
                            placeholder={placeholder}
                            value={customer.email}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.dirty && (
                            <div className={style.errorDiv}>
                              <span className={style.errorMsg}>
                                {meta.error}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={style.lineGroup}>
                    <Field name="buildings" placeholder="Buildings">
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Buildings</label>
                          <input
                            {...input}
                            className={style.inputStyle}
                            placeholder={placeholder}
                            value={customer.buildings}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.dirty && (
                            <div className={style.errorDiv}>
                              <span className={style.errorMsg}>
                                {meta.error}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
                <div className={style.columnA}>
                  <div className={style.lineGroup}>
                    <Field
                      name="fiscal_address"
                      placeholder="Fiscal Address"
                      validate={required}
                    >
                      {({ input, meta, placeholder }) => (
                        <div>
                          <label>Fiscal Address</label>
                          <input
                            {...input}
                            className={style.inputStyle}
                            placeholder={placeholder}
                            value={customer.fiscal_address}
                            onChange={(e) => {
                              input.onChange(e);
                              if (onChange) {
                                onChange(e);
                              }
                            }}
                          />
                          {meta.error && meta.dirty && (
                            <div className={style.errorDiv}>
                              <span className={style.errorMsg}>
                                {meta.error}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={style.BtnModCheck}
                    onClick={saveChanges}
                  >
                    Confirm
                  </button>
                  <button className={style.BtnModCancel} onClick={cancelClick}>
                    Cancel
                  </button>
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
      <li className={style.liStyle}>{props.customer._id}</li>
      <li className={style.liStyle}>{props.customer.customerType}</li>
      <li className={style.liStyle}>{props.customer.email}</li>
      <li className={style.liStyle}>{props.customer.buildings}</li>
      <li className={style.liStyle}>{props.customer.fiscal_address}</li>
      <div>
        <button onClick={toggleEdit} className={style.Btn}>
          <BiPencil />
        </button>
        <button className={style.Btn} onClick={() => setOpenModal(true)}>
          <GoTrashcan />
        </button>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <p className={style.msgConfirm}>Are you sure you want to delete ?</p>
          <button
            className={style.btnSubmit}
            onClick={() => props.deleteCustomer(props.customer._id)}
          >
            {" "}
            Confirm{" "}
          </button>
          <button
            className={style.btnSubmit}
            onClick={() => setOpenModal(false)}
          >
            {" "}
            Cancel{" "}
          </button>
        </Modal>
      </div>
    </ul>
  );
};

Item.propTypes = {
  customer: PropTypes.object.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Item;
