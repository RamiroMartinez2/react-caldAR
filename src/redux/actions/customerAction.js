import { ADD_CUSTOMER, DEL_CUSTOMER, UPD_CUSTOMER } from "../types/customerTypes";
import shortid from "shortid";

export const addCustomer = content => ({
  type: ADD_CUSTOMER,
  payload: {
    id: shortid.generate(),
    ...content
  }
});

export const delCustomer = number => ({
  type: DEL_CUSTOMER,
  payload: number
})

export const updateCustomer = content => ({
  type: UPD_CUSTOMER,
  payload: content,
})