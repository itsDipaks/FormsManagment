

import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthPrivate = ({children}) => {
 
const istoken= localStorage.getItem("token")
 
if(istoken?.length>3){
  return children
}else{
alert("please Login")
  return <Navigate to="/login"/>
}

}

export default AuthPrivate