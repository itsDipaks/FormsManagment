import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import CreateForm from "../Pages/CreateForm";
import AuthPrivate from "./AuthPrivate";
import DisplayForm from "../Pages/DisplayForm";

const CombineRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <AuthPrivate>
              <Home />
            </AuthPrivate>
          }
        />
        <Route
          path="/:id"
          element={
            <AuthPrivate>
              <CreateForm />
            </AuthPrivate>
          }
        />
        <Route
          path="/form/:id"
          element={
            <AuthPrivate>
              <DisplayForm />
            </AuthPrivate>
          }
        />
      </Routes>
    </>
  );
};

export default CombineRoutes;
