import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import loginModal from "./loginModal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    loginModal: loginModal
})

export default allReducers;