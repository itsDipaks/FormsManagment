import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import CreateForm from '../Pages/CreateForm'

const CombineRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<CreateForm/>}/>
        </Routes>
    </>
  )
}

export default CombineRoutes