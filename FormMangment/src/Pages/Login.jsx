import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Backendurl} from "../assets/Urls";
import Swal from "sweetalert2";
import axios from "axios";
import {useDispatch} from "react-redux";
import {userLogin} from "../Redux/Auth/Auth.actions";

const Login = () => {
  const [formdata, setformdata] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handeldsubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin(formdata));
    setTimeout(() => {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        navigate("/");
      }
    }, 1000);
  };

  const handeldinputs = (e) => {
    const {name, value} = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign In
              </h1>
              <form
                onSubmit={handeldsubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handeldinputs}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={handeldinputs}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-black  hover:bg-gray-300 border  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign In
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <Link to={"/signup"}>
                    <span className="font-medium text-primary-600 hover:underline ">
                      Sign up
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
