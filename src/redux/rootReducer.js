import { combineReducers } from "redux";
import phoneStoreReducer from "./PhoneStoreReducer";


const rootReducer = combineReducers({
  // root reducers
  stateCart: phoneStoreReducer
});

export default rootReducer;
