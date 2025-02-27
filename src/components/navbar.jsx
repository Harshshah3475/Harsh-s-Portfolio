import React from 'react'
import homeicon from "../assets/navicons/home.svg"
import folder from "../assets/navicons/folder.svg"
import Bcase from "../assets/navicons/briefcase.svg"
import tools from "../assets/navicons/tool.svg"
import thoughts from "../assets/navicons/edit.svg"

const navbar = () => {  
  return (
    <div className='w-[98vw] '>
        <nav className='w-[100%] h-[48px] flex justify-center mt-8'>
          <div className='w-3xs h-10 bg-[#ffffff] opacity-[0.2] rounded-2xl flex justify-between px-3.5'>

              <img src={homeicon} className='h-[25px] w-[36px] px-1 mt-2 hover:w-[45px]'></img>
              <img src={folder} className='h-[25px] w-[36px] px-1 mt-2 hover:w-[45px]' ></img>
              <img src={Bcase} className='h-[25px] w-[36px] px-1 mt-2 hover:w-[45px]'></img>
              <img src={tools} className='h-[25px] w-[36px] px-1 mt-2 hover:w-[45px]'></img>
              <img src={thoughts} className='h-[25px] w-[36px] px-1 mt-2 hover:w-[45px]'></img>
           

          </div>

            
        </nav>
    </div>
  )
}

export default navbar
