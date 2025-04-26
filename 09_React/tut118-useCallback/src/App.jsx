import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")
  const [id, setId] = useState(0)
  const [framework, setFramework] = useState("React+vite")

  // 1. with useCallback
  const getAdjective = useCallback(() => {
    return "count2 is " + count
  }, [count])

  // 2. without useCallback
  // const getAdjective = () => {
  //   return "count2 is " + count
  // }

  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <a href="https://github.com" target="_blank"></a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>useCallback</h1>
      <Navbar framework={framework} getAdjective={getAdjective} id={id} />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count1 is {count}
        </button>
      </div>
      
      <p className="read-the-docs">
        Click on count-1 to increment state in count-1 & count-2 too , but not vice-versa
      </p>
    </>
  )
}

export default App
