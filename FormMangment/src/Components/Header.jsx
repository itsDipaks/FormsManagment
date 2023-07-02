import React from 'react'
import logo from "../assets/Weblogo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Header = () => {
    let isauth=localStorage.getItem("token")
let navigate=useNavigate()
    let Logout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <div>
        
        
<nav class="bg-white border-gray-200  ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a   class="flex items-center">
            <img src={logo} class="h-8 mr-3" alt=" Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap  ">MyForms</span>
        </a>
        <div class="flex items-center">
            <p   class="mr-6 text-sm  text-gray-500   hover:underline">Dipak Pawar</p>
           { isauth?<p  class="text-sm  text-blue-600 cursor-pointer   hover:underline" onClick={()=>Logout()}> Logout </p>: <p  class="text-sm  text-blue-600 cursor-pointer   hover:underline"onClick={()=>{Navigate("/login")}} > Login</p>}
          {/* { <Link to={"/login"}>Login</Link>} */}
        </div>
    </div>
</nav>
<nav class="bg-gray-100  ">
    <div class="max-w-screen-xl px-4 py-6 mx-auto">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link to={"/"} href="#" class="text-gray-900   hover:underline" aria-current="page">Home</Link>
                </li>
              
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Header