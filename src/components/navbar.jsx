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
          <div className='w-3xs h-11 bg-[#ffffff1a] rounded-2xl flex justify-between px-3.5'>

              <div className="group relative">
                <img src={homeicon} className='h-[20px] w-[36px]  mt-3 filter invert' alt="Home"/>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Home</span>
              </div>

              <div className="group relative">
                <img src={folder} className='h-[20px] w-[36px]  mt-3 filter invert' alt="Projects"/>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Projects</span>
              </div>

              <div className="group relative">
                <img src={Bcase} className='h-[20px] w-[36px]  mt-3 filter invert' alt="Work"/>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Work</span>
              </div>

              <div className="group relative">
                <img src={tools} className='h-[20px] w-[36px]  mt-3 filter invert' alt="Tools"/>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Tools</span>
              </div>

              <div className="group relative">
                <img src={thoughts} className='h-[20px] w-[36px]  mt-3 filter invert' alt="Blog"/>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Blog</span>
              </div>

          </div>
        </nav>
    </div>
  )
}

export default navbar
