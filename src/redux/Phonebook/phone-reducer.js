import baseContact from "../../json/contact.json";
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from "./phone-type";
import { combineReducers } from "redux";


const contacts = (state = baseContact, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return state.some(
        (element) =>
          element.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
      )
        ? alert("We have this contact")
        : [...state, payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
