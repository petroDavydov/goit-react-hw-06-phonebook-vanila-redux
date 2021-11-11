import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from "./phone-type";
import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payoad: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = (contactId) => ({
  type: CHANGE_FILTER,
  payload: contactId,
});

const actions = { addContact, deleteContact, changeFilter };

export default actions;
