import React from 'react'
import Levels from './Levels';
import { Button } from './components/ui/button'
import { GoBell } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { PiSquaresFour } from "react-icons/pi";
import { IoSettingsOutline } from 'react-icons/io5';
import { GrSchedule } from 'react-icons/gr';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <div>
        <div className='flex justify-between '>
        <div className='flex'>
        <div className="md:hidden">
            <Sheet>
            <SheetTrigger className='m-4'><GiHamburgerMenu size={30}/></SheetTrigger>
            <SheetContent>
            <SheetHeader>
                <SheetDescription>
                <div className='absolute top-20 bg-white'>
          {/*Components*/}
          <div className='hover:bg-violet-600 hover:text-white  ml-6 mb-6 flex flex-col justify-center items-center w-50 rounded-xl cursor-pointer h-20'>
            <PiSquaresFour size="30"   />
            <button className='  rounded'>Overview</button>
      
          </div>
          
          <div className=' hover:bg-violet-600 hover:text-white ml-6 mb-6 flex flex-col justify-center items-center w-40 rounded-xl cursor-pointer h-20'>
           <GrSchedule size="30"  />
            <button className='  rounded'>Schedules</button>
      
          </div>
          <hr class="h-px my-8 ml-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className=' hover:bg-violet-600 ml-6 mb-2  flex flex-col justify-center items-center w-40 rounded-xl cursor-pointer h-20'>
            <IoSettingsOutline  size="30" />
            <button className='  rounded'>Overview</button>
      
          </div>
          </div>
           
                </SheetDescription>
              </SheetHeader>
            </SheetContent>          
            </Sheet>
          </div>


            <Button className="bg-button w-12 text-white h-6 m-4 ml-8 hidden md:block">Logo</Button>
            <h1 className='mt-4 text-progress font-semibold hidden md:block'>Pr. Name</h1>
            <hr />
            <div class="relative mt-2 ml-12">
               <input type="text" placeholder="Search..." class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500 w-64 pl-10" />
               <svg class="absolute left-3 top-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.93 13.97l4.35 4.36a1 1 0 1 1-1.42 1.42l-4.36-4.35a8 8 0 1 1 1.43-1.43zM9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12z" clip-rule="evenodd" />
               </svg>
            </div>
        </div>

        <div className='flex'>
           <GoBell size={25} className='m-4'/>
           <span className='m-1'>
            <h1 className='font-semibold'>Tharan</h1>
           <h1 className=' text-gray-400'>Student</h1>
           </span>
           <IoIosContact className='m-2' size={40}/>
        </div>
        </div>
        <hr />
  
                 
    {/* downbar */}
    <div className='grid grid-cols-1 '> 
    <div className='hidden md:block absolute top-20 bg-white'>
          {/*Components*/}
          <div className='hover:bg-violet-600 hover:text-white  ml-6 mb-6 flex flex-col justify-center items-center w-50 rounded-xl cursor-pointer h-20'>
            <PiSquaresFour size="30"   />
            <button className='  rounded'>Overview</button>
      
          </div>
          
          <div className=' hover:bg-violet-600 hover:text-white ml-6 mb-6 flex flex-col justify-center items-center w-40 rounded-xl cursor-pointer h-20'>
           <GrSchedule size="30"  />
            <button className='  rounded'>Schedules</button>
      
          </div>
          <hr class="h-px my-8 ml-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className=' hover:bg-violet-600 ml-6 mb-2  flex flex-col justify-center items-center w-40 rounded-xl cursor-pointer h-20'>
            <IoSettingsOutline  size="30" />
            <button className='  rounded'>Overview</button>
      
          </div>
    </div>
         
          
      
      <div className='bg-back md:ml-80'>
            <Levels />
      </div>
    </div>
        
    </div>
  )
}

export default Navbar