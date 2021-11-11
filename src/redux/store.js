import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phoneBookReducer from "./Phonebook/phone-reducer";

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
