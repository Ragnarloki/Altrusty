import React, { useState } from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import "./Sidebar.css"
import  Home from '../Home'
function Sidebar() {
  const[menu,setMenu]=useState("");

  return (
  <div className='flex justify-between bg-white-500 w-100 z-10'>
     <div className=' bg-white-500 h-full  font-mono font-bold'>

      {/* topbar */}
       <div className=' pr-4 bg-white-50  border border-gray '>
          <div className=' flex mt-6  ml-6 mb-2'>
          <button className=' text-white mr-4 w-16 h-7  bg-violet-950 cursor-pointer rounded-sm  '>Logo</button>
          <p className='text-xl text-violet-600'>Pr.Name</p>

      </div>
    </div>
    
    {/* downbar */}
        <div className='absolute top-20'>
          {/*Components*/}
          <div className='hover:bg-violet-600 hover:text-white  ml-6 mb-6 flex flex-col items-center w-50 rounded cursor-pointer h-19'>
            <PiSquaresFour size="20"  />
            <button className='  rounded'>Overview</button>
      
          </div>
          
          <div className=' hover:bg-violet-600 hover:text-white ml-6 mb-6 flex flex-col items-center w-40 rounded cursor-pointer h-19'>
           <GrSchedule size="20" />
            <button className='  rounded'>Schedules</button>
      
          </div>
          <hr class="h-px my-8 ml-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className=' hover:bg-violet-600 ml-6 mb-2  flex flex-col items-center w-40 rounded cursor-pointer h-18'>
            <IoSettingsOutline  size="20" />
            <button className='  rounded'>Overview</button>
      
          </div>
              </div>
              </div>
              {/*search bar */}
              <Home/>
              
                  
    </div>
   
  )
}

export default Sidebar
