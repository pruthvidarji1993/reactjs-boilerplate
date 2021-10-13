import { combineReducers } from "redux";
import loginReducer from "./authReducer/loginReducer";

const rootReducer = combineReducers({
 login : loginReducer
});

export default rootReducer;
