import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const allReducers = combineReducers({
    userLogin : loginReducer,
    userRegister : registerReducer,

})

export default allReducers;