import { Bold } from 'lucide-react';
import React, { useState } from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { Progress } from "@/components/ui/progress";

import virtual_assistant from "/virtual_assistant.webp";
const stages=[
    {
        id:1,
        progress:60,
        level:10
    },
    {
        id:2,
        progress:60,
        level:10
    },{
        id:3,
        progress:60,
        level:10
    },{
        id:4,
        progress:60,
        level:10
    },{
        id:5,
        progress:60,
        level:10
    },{
        id:6,
        progress:60,
        level:10
    },{
        id:7,
        progress:60,
        level:10
    },{
        id:8,
        progress:60,
        level:10
    }
]
function Task() {
    const [progress, setProgress] = React.useState(13)
    const [level,setLevel]=useState()
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(60), 500)
      return () => clearTimeout(timer)
    }, [])
   
     
  return (
    <div className='h-full m-4 w-full  md:flex  justify-evenly'>
    <div className="w-full md:w-5/6   h-5/6 bg-white border-2 border-back rounded-lg shadow-md">
    <div className='relative '>
    <div className="text-xl  flex justify-between font-semibold text-gray-800">
        <div className='text-text ml-2 mt-2'>Stages</div>
        <span className='bg-four_squares mr-2 mt-2 items-center  rounded-full w-8 h-8'>
           <PiSquaresFour className=' mt-1.5 ml-1.5 '  color='rgba(45, 28, 100, 1)'/>
        </span>
        
    </div>
    <hr className='mt-3'/>
    </div>


  
    <div className=''>
        {stages.map((stage)=>(
            <div key={stage.id}>
                <div className=' flex justify-between m-5 -mb-5 sm:mr-1 font-normal  md:font-semibold '>
                <h1>Stage-{stage.id}</h1>
                <div>
                    <span className=' flex justify-between'>
                    <h1 className='sm:w-32 md:w-52 mb-1 '>Progress bar</h1>
                    <h1 className='text-progress ml-1 '>{stage.progress}%</h1>
                    </span>
                     <Progress value={progress} className="w-[100%]" />
                
                </div>
                <h1 className='text-progress flex ml-2 mr-0'>View Details</h1>
                </div>
                
                
                <h1 className='m-5 mt-0 font-light'>Level-{stage.level}</h1>
            </div>
        ))}
    </div>
    </div>
    <div className="mt-1 rounded-xl text-center w-[330px] md:h-60 sm:ml-5 sm:pl-2 bg-white ml-2 mb-2 mr-2">
            <img
              src={virtual_assistant}
              className="h-[100px] w-[100px] ml-[90px]"
              alt="virtual assistant is not available"
            />
            <span>
              <p className="pt-2 pl-2 text-primaryLight text-center font-bold text-medium">
                Ask me anything
              </p>
              <p className=" pl-2 text-xs text-slate-500 font-medium">
                I am here to resolve your queries and doubts
              </p>
            </span>

            <button className="w-[250px] m-2 text-white h-[30px] bg-primaryLight">
              Start Converse
            </button>
          </div>
    </div>
  
 
  )
  
}

export default Task