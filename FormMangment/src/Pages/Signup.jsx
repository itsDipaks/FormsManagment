import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Backendurl} from "../assets/Urls";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const [formdata, setformdata] = useState({});
  const navigate = useNavigate();
  const handeldsubmit = async (e) => {
    e.preventDefault();
    let User = await axios.post(`${Backendurl}/auth/signup`, formdata);
    console.log(User);
    if (User.data.msg == "Sucessfully") {
      Swal.fire("Sucessfull !", "Signup Sucessfully !", "success");
      navigate("/login");
    } else if (User.data.msg == "UserExist") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Aleardy Exist !",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something Wents Wrong !",
      });
    }
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
      <section className=" bg-gray-50  ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign Up
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
                    Your Name
                  </label>
                  <input
                    onChange={handeldinputs}
                    type="text"
                    name="name"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter Name "
                    required=""
                  />
                </div>
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
                    placeholder="Enter Email"
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
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Have an account ?{" "}
                  <Link to={"/login"}>
                    <span className="font-medium text-primary-600 hover:underline ">
                      Sign in
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

export default Signup;
