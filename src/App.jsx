import { useState } from 'react'
import './App.css'
import NameCard from './components/nameCard'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'


function App() {


  return (
    <>
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex justify-center'>
        <Navbar/>
      </div>
      <div className='w-full max-w-[1024px] mx-auto'>
        <div className='md:flex'>
          <NameCard/>
          <Hero/> 
        </div>
      </div>
      
    </div>
   
    <Footer/>
    </>
  )
}

export default App
