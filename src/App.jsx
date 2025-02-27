import { useState } from 'react'
import './App.css'
import NameCard from './components/nameCard'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {


  return (
    <>
    <div className='w-[98vw]'>
    
    <Navbar/>
    <div className='md:flex md:justify-center w-[90vw] h-auto'>
    <div className='md:w-[60%] md:flex h-auto'>
    <NameCard/>
    <Hero/>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
