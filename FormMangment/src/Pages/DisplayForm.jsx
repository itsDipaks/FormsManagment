import axios from "axios";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Backendurl} from "../assets/Urls";

const DisplayForm = () => {
  const [form, setformdata] = useState();

  let param = useParams();
let loading=true


  let {token} = useSelector((Store) => Store.Auth);

  let getform = async () => {
    let Forms = await axios.get(`${Backendurl}/form/${param.id}`, {
      headers: {token: token},
    });
    if (Forms.data) {
      setformdata(Forms.data);
    }
  };
  console.log(form);
  useEffect(() => {
    getform();
  }, []);
  //

  return (
    <div className="container mx-auto p-4 w-1/2 border m-8 ">
      <h1 className="text-4xl font-bold mb-4 text-center">
        {" "}
        {form?.formtitle}{" "}
      </h1>
      <p className="text-gray-500 mb-4 text-center">{form?.formdesc}</p>
      {form?.questions?.map((qs, ind) => (
        <div className="w-11/12 m-auto">
          <ul>
            <div className="flex p-2 gap-4">
              <h1 className=" font-bold">Q {ind + 1}</h1>
              <h2 className="text-start font-bold">{qs.questionText}</h2>
            </div>
            <div className="ml-5">
              {qs.options?.map((ops, i) => (
                <li className="p-1">
                  <span className="mr-2">{i + 1} .</span> {ops?.optionText}{" "}
                </li>
              ))}
            </div>
            <div className="text-indigo-400 ml-14 font-semibold p-4">
              Answer : <span className="text-red-400">{qs?.answerkey}</span>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayForm;
