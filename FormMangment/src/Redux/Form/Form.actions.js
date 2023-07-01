import {AUTH_GET_ERROR, AUTH_GET_LOADING, AUTH_GET_SUCESS} from "./Form.type";
import axios from "axios";
import Swal from "sweetalert2";
import { Backendurl } from "../../assets/Urls";
import { Navigate, useNavigate } from "react-router-dom";
export let signup = (formdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});

    let User = await axios.post(`${Backendurl}/auth/signup`, formdata);
    if (User.data.msg == "Sucessfully") {
          Swal.fire("Sucessfull !", "Signup Sucessfully !", "success");
          dispatch({type: AUTH_GET_SUCESS })
          Navigate("/login")
        } else if (User.data.msg == "UserExist") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Aleardy Exist !",
          });
          dispatch({type: AUTH_GET_ERROR});
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something Wents Wrong !",
          });
          dispatch({type: AUTH_GET_ERROR});
        }
 ;

};

export let userLogin = (loginformdata) => async (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    let loginCred = await axios.post(`${Backendurl}/auth/login`, loginformdata);
    console.log(loginCred)
    
    dispatch({type: AUTH_GET_SUCESS, payload: loginCred});
    Swal.fire("Welcome Back !", "Login success !", "success");
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Faild ! Please Check Your Credentials !",
    });
  }
};

export let userLogout = () => (dispatch) => {
  dispatch({type: AUTH_GET_LOADING});
  try {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: AUTH_LOGOUT, payload: null});

        Swal.fire("Logout Sucessfully!", "", "success");
      }
    });
  } catch (err) {
    dispatch({type: AUTH_GET_ERROR});
  }
};
