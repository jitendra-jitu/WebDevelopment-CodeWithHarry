import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let count=0;

  return (
    <>
      <div>the count state will be: {count}</div>
      <button onClick={()=>{setCount(count+1)}}>update count</button>
      {/* <button onClick={()=>{count=count+1}}>update count</button> */}
      {/* -->it doesn't update the count state in all cases ..but increments the count */}
    </>
  )
}

export default App
