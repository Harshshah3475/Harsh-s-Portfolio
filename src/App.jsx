import { useState, useEffect } from 'react'
import './App.css'
import NameCard from './components/nameCard'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'


function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex justify-center'>
        <Navbar/>
      </div>
      
      <div className='w-full max-w-[1024px] mx-auto'>
        <div className='md:flex'>
          <div >
        <NameCard/>
        </div>
          <Hero/> 
        </div>
      </div>
      
    </div>
   
    <Footer/>
    {/* Using useState to track scroll position */}
   

    {showButton && (
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 text-white transition-all hover:scale-110"
        aria-label="Return to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    )}
    </>
  )
}

export default App
