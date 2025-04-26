import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment,incrementByAmount,Triple,Double,Reset } from './features/counterSlice'

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(0)
  const dispatch = useDispatch()

  return (
    <>
    <h2>Tut 120:React-Redux</h2>
    <Navbar/>
    <div>
      App count-{count}
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(Double())}}>Double</button>
      <button onClick={()=>{dispatch(Triple())}}>Triple</button>
      <button onClick={()=>{dispatch(Reset())}}>Reset</button>
      <input type="text" name="num" id="" onChange={(e) => setNum(e.target.value)} />
      <button onClick={()=>{dispatch(incrementByAmount(parseInt(num)))}}>incrementByAmount</button>
    </div>
      
    </>
  )
}

export default App


