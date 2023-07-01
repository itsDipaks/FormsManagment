import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <> 

    <div className="flex items-center justify-center    mt-4 m-auto">
    <Link to={"/newform"}>
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-80 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100  ">
        <div className="flex flex-col items-center justify-center pt-2 pb-2">
            <svg aria-hidden="true" className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click To Add New Form</span> </p>
        </div>
       
    </label>
    </Link>
</div> 
  






<section className='m-4'>
<div className='grid grid-cols-1 grid-flow-row gap-2 md:grid-cols-4' >
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Attendance Form</h5>
    <p className="font-normal text-gray-700  ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
</div>
    


</section>













    </>
  )
}

export default Home