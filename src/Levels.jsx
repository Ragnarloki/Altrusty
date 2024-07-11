import React from 'react'
import { FiArrowLeftCircle } from "react-icons/fi";
import { Button } from './components/ui/button';
import { AlignCenter, PlusCircleIcon } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { FiUpload } from "react-icons/fi";
import { FiLock } from "react-icons/fi";


const levels=[
  
  {
    level:2,
    Description:"Description"
  },{
    level:3,
    Description:"Description"
  },{
    level:4,
    Description:"Description"
  },{
    level:5,
    Description:"Description"
  },{
    level:6,
    Description:"Description"
  },{
    level:7,
    Description:"Description"
  },{
    level:8,
    Description:"Description"
  },{
    level:9,
    Description:"Description"
  },{
    level:10,
    Description:"Description"
  }
]
function Levels() {
  return (
    <div className='bg-back'>
          <div className='w-11/12 ml-14   flex justify-between h-5/6'>
        
        <div className='flex mt-1'>
          <FiArrowLeftCircle size={25}/> 
          <h1 className='font-light  ml-4'>Stage-1{'>'}Levels</h1>
      
        </div>
      
        <div className='flex' >
            <h1 className='text-text accent-current underline mb-2 mt-2'>Activity log </h1>
            <Button className="bg-white ml-2 border border-black">Manage</Button>
            <Button className="bg-progress text-white ml-2 mb-3">
                <PlusCircleIcon size={20}  className='mt-1  mr-1' />Create</Button>
    
        </div>
       
        
      </div>
          <div className="bg-white ml-16 font-bold h-96 w-5/6 rounded-md border">
            <h1 className=' m-4 font-extrabold text-xl'>Levels</h1>
            <hr className='border-b-2' />
            
            
            <ScrollArea className="h-80 w-100% rounded-md ">
            <div  className='flex font-bold justify-between m-4'>
                
                <h1 className='mt-4' >Level-1</h1>
                <h1 className='mt-4'>Description</h1>
                <span >


                <div className="flex items-center justify-center h-6">
                  <span className='items-center'>
                   <FiUpload className='bg-back' size={25} color='text'/>
                  </span>
                    </div>
                  
                  <span className='text-center selce '>
                  <h1>Upload files</h1>
                  <h1 className='font-thin'>Upload task file to complete level</h1>
                  </span>
                  
                  
                </span>
              </div>
              {levels.map((level)=>(
                <div key={level.level} className='flex  text-gray-300 justify-between m-4'>
                
                <h1 className='mt-4' >Level-{level.level}</h1>
                <h1 className='mt-4 flex '>{level.Description}<FiLock className='z-10' size={40}/></h1>
                <span >


                <div className="flex items-center justify-center h-6">
                  <span className='items-center'>
                   <FiUpload className='bg-back' size={25} color='text'/>
                  </span>
                    </div>
                  
                  <span className='text-center'>
                  <h1>Upload files</h1>
                  <h1 className='font-thin'>Upload task file to complete level</h1>
                  </span>
                  
                  
                </span>
              </div>
              ))}
            </ScrollArea>
        </div>

       

<br />

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

       

    </div>
  )
}

export default Levels