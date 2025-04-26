import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Container from './components/Container'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-violet-50 w-full xl:w-[100vw]'>
        <div className='w-full  md:w-4/6'>
          <Navbar/>
          <Container/>
        </div>
      </div>
    </>
  )
}

export default App
