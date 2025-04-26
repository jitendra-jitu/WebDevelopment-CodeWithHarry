import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const array = new Array(1_00_00_000).fill(0).map((_, index) => {
  return {
    index: index,
    isMagical: index === 77_77_777
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [nums, setnums] = useState(array)


  //////////////////////Without useMemo Hook////////////////////////
  // const search=nums.find((num)=>num.isMagical)

  //////////////////////useMemo Hook////////////////////////
  const search = useMemo(() => nums.find((num) => num.isMagical), [nums]);
  // const search = useMemo(() => nums.find((num) => num.isMagical), []);

  return (
    <>
      <h2>Magical Number is</h2>
      <h4>{search.index.toLocaleString()}</h4>
      <h1>Tut117 - useMemo Hook</h1>
      <div className="card">

        <button onClick={() => {
          setCount((count) => count + 1);
          if (count === 10) {
            setnums(new Array(2_00_00_000).fill(0).map((_, index) => {
              return {
                index: index,
                isMagical: index === 1_99_99_999
              }
            }));
          }
          }}
        >

          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
