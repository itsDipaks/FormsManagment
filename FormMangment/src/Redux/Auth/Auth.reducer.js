import {
  AUTH_GET_ERROR,
  AUTH_GET_LOADING,
  AUTH_GET_SUCESS,
  AUTH_LOGOUT,
} from "./Auth.type";
const token = JSON.parse(localStorage.getItem("token")) || null
let initialstate = {
  LoadAuth: false,
  error: false,
  token: token,
  islogin:false,
};

export const AuthReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case AUTH_GET_LOADING: {
      return {
        ...state,
        LoadAuth: true,
      };
    }
    case AUTH_GET_SUCESS: {
      if (payload.data.token) {
        localStorage.setItem("token", JSON.stringify(payload?.data?.token));
        localStorage.setItem("islogin", JSON.stringify(true));
      }
      return {
        ...state,
        LoadAuth: false,
        token: payload.data.token,
        islogin:true,
      };
    }
    case AUTH_GET_ERROR: {
      return {
        ...state,
        LoadAuth: false,
        error: true,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token")
      return {
        ...state,
        token: null,
        LoadAuth:false
      };
    }
    default:
      return state;
  }
};
