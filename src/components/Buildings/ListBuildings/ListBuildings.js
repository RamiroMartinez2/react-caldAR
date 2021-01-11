import React, { useState } from "react";
import style from "./ListBuildings.module.css";
import PropTypes from "prop-types";
import { BiPencil } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import Modal from "../../Modal/Modal";
import { Form, Field } from "react-final-form";
import {
  required,
  address,
  fullName,
  composeValidators,
  phone,
} from "../../../utils/validations";

const ListBuildings = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [building, setBuilding] = useState({ ...props.building });
  const [openModal, setOpenModal] = useState(false);
  const onSubmit = () => {
    props.setOpenModal(false);
  };
  const cancelClick = () => {
    toggleEditing();
    setBuilding(props.building);
    setOpenModal(false);
  };
  const toggleEdit = () => {
    setBuilding(props.building);
    toggleEditing(!isEditing);
    setOpenModal(true);
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
      <Modal
        title="Modify Menu"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <Form onSubmit={onSubmit}>
          {/* eslint-disable-next-line no-unused-vars */}
          {({ handleSubmit, meta, values, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="address"
                  placeholder="Address"
                  validate={composeValidators(required, address)}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <label>Address</label>
                      <input
                        {...input}
                        className={style.inputStyleModule}
                        placeholder={placeholder}
                        value={building.address}
                        onChange={(e) => {
                          input.onChange(e);
                          if (onChange) {
                            onChange(e);
                          }
                        }}
                      />
                      {(building.address === "" || meta.dirty) && (
                        <span className={style.errorMsg}> {meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <Field
                  name="boilerID"
                  placeholder="Boilers ID"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <label>Boiler ID</label>
                      <input
                        {...input}
                        className={style.inputStyleModule}
                        placeholder={placeholder}
                        value={building.boilerID}
                        onChange={(e) => {
                          input.onChange(e);
                          if (onChange) {
                            onChange(e);
                          }
                        }}
                      />
                      {(building.boilerID === "" || meta.dirty) && (
                        <span className={style.errorMsg}> {meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <Field
                  name="fullname"
                  placeholder="Name"
                  validate={composeValidators(fullName, required)}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <label>Name</label>
                      <input
                        {...input}
                        className={style.inputStyleModule}
                        placeholder={placeholder}
                        value={building.fullname}
                        onChange={(e) => {
                          input.onChange(e);
                          if (onChange) {
                            onChange(e);
                          }
                        }}
                      />
                      {(building.fullname === "" || meta.dirty) && (
                        <span className={style.errorMsg}> {meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <Field
                  name="phone"
                  placeholder="Phone"
                  validate={composeValidators(required, phone)}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <label>Phone</label>
                      <input
                        {...input}
                        className={style.inputStyleModule}
                        placeholder={placeholder}
                        value={building.phone}
                        onChange={(e) => {
                          input.onChange(e);
                          if (onChange) {
                            onChange(e);
                          }
                        }}
                      />
                      {(building.phone === "" || meta.dirty) && (
                        <span className={style.errorMsg}> {meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={style.btnAdd}
                onClick={saveChanges}
              >
                {" "}
                Confirm{" "}
              </button>
              <button className={style.btnAdd} onClick={cancelClick}>
                {" "}
                Cancel{" "}
              </button>
            </form>
          )}
        </Form>
      </Modal>
    );
  }

  return (
    <div>
      <ul className={style.showForm}>
        <li className={style.liStyle}>{props.building._id}</li>
        <li className={style.liStyle}>{props.building.address}</li>
        <li className={style.liStyle}>{props.building.boilerID}</li>
        <li className={style.liStyle}>{props.building.fullname}</li>
        <li className={style.liStyle}>{props.building.phone}</li>
        <div className={style.btnGroup}>
          <button className={style.Btn} onClick={() => setOpenModal(true)}>
            <GoTrashcan />
          </button>
          <Modal title="" openModal={openModal} setOpenModal={setOpenModal}>
            <p className={style.msgConfirm}>Are you sure you want to delete?</p>
            <button
              className={style.btnAdd}
              onClick={() => props.delBuilding(props.building._id)}
            >
              {" "}
              Delete{" "}
            </button>
            <button className={style.btnAdd} onClick={cancelClick}>
              {" "}
              Cancel{" "}
            </button>
          </Modal>
          <button onClick={toggleEdit} className={style.Btn}>
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
  setOpenModal: PropTypes.func.isRequired,
};

export default ListBuildings;
