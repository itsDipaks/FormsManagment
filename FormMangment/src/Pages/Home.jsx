import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Backendurl} from "../assets/Urls";
import {useSelector} from "react-redux";
import formlogo from "../assets/Weblogo.png"
const Home = () => {
  let navigate = useNavigate();
  let [forms, setforms] = useState([]);
  let {token} = useSelector((Store) => Store.Auth);
  const GenerateForm = async () => {
    try {
      let Form = await axios.post(
        `${Backendurl}/form/generateform`,
        {},
        {headers: {token: token}}
      );
      console.log(Form);
      if (Form.data.newForm_id) {
        navigate(`/${Form.data.newForm_id}`);
      }
    } catch (err) {
      alert("Something Wents Wrong");
    }
  };

  useEffect(() => {
    getalluserforms();
  }, []);
  let getalluserforms = async () => {
    let Forms = await axios.get(`${Backendurl}/form/userforms`, {
      headers: {token: token},
    });
    if (Forms.data) {
      setforms(Forms.data);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center    mt-4 m-auto">
        <div onClick={GenerateForm}>
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-80 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  "
          >
            <div className="flex flex-col items-center justify-center pt-2 pb-2">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 ">
                <span className="font-semibold">Click To Add New Form</span>{" "}
              </p>
            </div>
          </label>
        </div>
      </div>

      <section className="  w-11/12 m-auto mt-12">
       
        <div className="grid grid-cols-1 grid-flow-row gap-2 md:grid-cols-4">
          {forms &&
            forms?.map((el,i) => (
              <Link to={`/${el?._id}`}
                href="#"
                style={{alignItems:"center"}}
                className=" max-w-sm p-4 flex flex-col justify-center  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  "
              >

<img src={formlogo} className="w-20 m-auto  p-2" alt="" />
<div>
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
              { el?.formtitle} <span>{i+1}</span>
                </h5>
                <p className="font-normal text-gray-700  ">
                {el?.formdesc}
                </p>
</div>
                
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
