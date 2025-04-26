import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1'
import { CountContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{ count ,setCount}}>
          {/* <Component1 count={count} setCount={setCount} /> */}
          <Component1/>
          <div className="card component">
              <h3>App.jsx</h3>
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
          </div>
      </CountContext.Provider>
    </>
  )
}

export default App
