import {
    SET_LOGIN_FLAG,
  } from "../../actions/types/type";
  const initState = {
    loginFlag: false,
  };
  const LoginReducer = (state = initState, action) => {
    switch (action.type) {      
      case SET_LOGIN_FLAG:
        return { ...state, loginFlag: action.payload.data };
      
      default:
        return { ...state };
    }
  };
  export default LoginReducer;