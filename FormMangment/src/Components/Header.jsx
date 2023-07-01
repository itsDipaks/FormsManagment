import React from 'react'
import logo from "../assets/Weblogo.png"
const Header = () => {
  return (
    <div>
        
        
<nav class="bg-white border-gray-200  ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a   class="flex items-center">
            <img src={logo} class="h-8 mr-3" alt=" Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap  ">MyForms</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500   hover:underline">Dipak Pawar</a>
            <a href="#" class="text-sm  text-blue-600   hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-100  ">
    <div class="max-w-screen-xl px-4 py-6 mx-auto">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class="text-gray-900   hover:underline" aria-current="page">Home</a>
                </li>
                
                <li>
                    <a href="#" class="text-gray-900   hover:underline">Form</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Header