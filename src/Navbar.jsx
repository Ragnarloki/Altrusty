import React from 'react'
import { Button } from "@/components/ui/button"
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



function Navbar() {
  return (
    <div>
        <div className='flex justify-between bg-white-500 w-100 z-10'>
     <div className=' bg-white-500 h-full  font-mono font-bold'>

      {/* topbar */}
       <div className=' pr-4 bg-white-50  border border-gray '>
          <div className=' flex mt-6  ml-6 mb-2'>
          <button className=' text-white mr-4 w-16 h-7  bg-violet-950 cursor-pointer rounded-sm  '>Logo</button>
          <p className='text-xl text-violet-600'>Pr.Name</p>

      </div>
    </div>
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
            </div>
    </div>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>

  )
}

export default Navbar