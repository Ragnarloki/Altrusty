import React, { useState } from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";




import "./Sidebar.css"
function Sidebar() {
  const[menu,setMenu]=useState("");

  return (
  <div className='flex justify-between bg-white-500 w-100'>
     <div className=' bg-white-500 h-full  font-mono font-bold'>

      {/* topbar */}
       <div className=' pr-4 bg-white-50  border border-gray '>
          <div className=' flex mt-6  ml-6 mb-2'>
          <button className=' text-white mr-4 w-16 h-7  bg-violet-950 cursor-pointer rounded-sm  '>Logo</button>
          <p className='text-xl text-violet-600'>Pr.Name</p>

      </div>
    </div>
    {/* downbar */}
        <div className=' top-20'>
          {/*Components*/}
          <div className='hover:bg-violet-600 hover:text-white  ml-6 mb-6 flex flex-col items-center w-50 rounded cursor-pointer h-44'>
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
              <div className=' relative  h-20'>
              {/* <LuSearch className='absolute top-3 text-violet p-1 pt-2  ' size="30"   /> */}
              <i className="pi pi-search absolute top-4 text-violet-600 p-1 pl-2 pt-2 pointer-events-none" ></i>
              
                <input type="text"
                placeholder='search'
                autoComplete='off'
                className='px-3 py-2 bg-violet-200 mt-3 pl-9 w-80 placeholder-violet-600 text-black rounded border-none focus:border-none'
                />
                <i className='pi pi-filter  text-violet-600 absolute top-6 right-3 cursor-pointer  ' />
               
                </div>
                 {/*rightside */}
                 <div className='flex justify-between mr-10 '>
                    <i className='pi pi-bell  text-violet-600 mt-6 mr-5  text-xl'  />
                    <div className='flex'>
                      <span className="mr-5">
                        <p className='text-black-500 mt-3   font-bold'>Jhon</p>
                        <p className='text-gray-600  font-medium'>Doe</p>
                      </span>
                      
                      <BsPersonCircle size="30" className='mt-4 '/>
                    </div>


                  </div>
                  
    </div>
   
  )
}

export default Sidebar
