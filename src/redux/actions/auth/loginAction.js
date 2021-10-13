
import {
    SET_LOGIN_FLAG,
  } from "../types/type";
  export const setLoginFlag = (value) => {
    return {
      type: SET_LOGIN_FLAG,
      payload: { data: value },
    };
  };
