import React from 'react'
import { PiDotsThreeVertical} from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { FaRegSmile } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { icons } from 'lucide-react'
import Levels from './Levels';
import Task from './Task';
const tasks=[
  {
    id:1,
    taskname:"complete Stage",
    level:25,
    icons:<FaRegCheckCircle color='rgba(75, 251, 114, 1)'/>
    
    
  },
  {
    id:2,
    taskname:"Remaining Stage",
    level:50,
    icons:<FaRegClock color='rgba(251, 120, 82, 1)'/>
  }
  ,
  {
    id:3,
    taskname:"Total Stages",
    icons: <FaRegSmile color='rgba(75, 251, 114, 1)' />,
    level:75,
  },
 
]
function Home() {
  return (
    <div className=' bg-back'>
    <div className='grid ml-2 mr-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10'>
      {tasks.map((task)=>(
      //     <Card className='bg-white rounded-lg  shadow-2xl text-center border' key={task.id} >
      //     <CardHeader>
      //       <CardTitle className="flex justify-between">{task.taskname} {task.icons}</CardTitle>
      //     </CardHeader>
      //     <CardContent>
      //       <p>{task.level} </p>
      //     </CardContent>
      //     <CardContent >
      //       <p>See Details {'>'}</p>
      //     </CardContent>
      //   </Card>
      // ))}
      // <Card className='bg-white rounded-lg w-70 text-center border w-36' >
      //     <CardHeader>
      //       <CardTitle>Add Stage</CardTitle>
      //     </CardHeader>
      //     <CardContent className="text-center ml-7">
      //     <HiOutlinePlusCircle size={30}/>
      //     </CardContent>
         
      //   </Card>
      <div key={task.id} className='bg-white border-2 rounded-2xl  details w-48 text-center shadow-2xl border-gray-300 '>
        <div className=' ml-1 mr-1'>
         <span className='font-bold  text-text flex justify-between mt-2'>
            <span className='flex '>
            <h1 >{task.taskname} </h1>
            <p className='mt-2 ml-2'>{task.icons}</p>
            </span>
            <PiDotsThreeVertical className='mt-2'/>
          </span>
          <h2 className='mt-2 font-bold  text-text text-2xl'>{task.level}</h2>
          <h2 className='text-s'>See Details {'>'}</h2>
       </div>
        
       </div>
       
      ))}     
      <div className='bg-white border-2 font-bold rounded-lg  w-48 text-center shadow-2xl border-gray-300'>
        <div className='ml-1 mr-1 mt-2'>
         <span className=' text-text text-center'>
            <h1 >Add Stages</h1>
          </span>
          <h2 className='mt-4  ml-20'><HiOutlinePlusCircle   size={25}/></h2>
          
       </div>
        
       </div>
       
  </div>
  <div className="flex justify-center items-center h-72">
           <Task />
       </div>

      
  </div>
  )
}

export default Home