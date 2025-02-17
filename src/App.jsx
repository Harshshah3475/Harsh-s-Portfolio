import { useState } from 'react'
import './App.css'
import NameCard from './components/nameCard'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <NameCard/>
    </>
  )
}

export default App
