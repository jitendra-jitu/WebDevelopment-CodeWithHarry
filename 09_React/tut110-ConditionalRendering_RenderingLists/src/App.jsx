import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn,setshowbtn] = useState(false)


  const [todos,settodos] = useState([
    {
      title :'introduction to React-105',
      desc :'This is the introduction to React video tutorial'
    },
    {
      title :'React Hooks-108',
      desc :'This is the React Hooks video tutorial'
    },
    {
      title :'React Router-110',
      desc :'This is the React Router video tutorial'
    }
  ])


  // const TodoFunctionalComponent = ({ todo }) => (
  //   <>
  //     <div className='m-4'>
  //       <h4 className="todo-title border border-purple-400 ">{todo.title}</h4>
  //       <p className="todo-desc  border border-purple-400 ">{todo.desc}</p>
  //     </div>
  //   </>
  // );


  return (
    <>

      <div className='flex justify-center' >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">

        {/* Mthd-1  */}
        {/* {showbtn ? 
          <h2>Conditional Rendering & Rendering Lists in React... </h2>
        : 
          <h2>This will only be visible when the showbtn is clicked</h2>
        } */}


        {/* Mthd-2  */}
        {showbtn && <h2>Conditional Rendering & Rendering Lists in React... </h2>}


        {/* btnToRender */}
        <button onClick={() => setshowbtn((showbtn)=>!showbtn)}>Toggle Header</button>


        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}


        {todos.map(item => {
          // return <TodoFunctionalComponent key={item.title} todo={item}  />

          return (<div key={item.title} className='m-4'>
            <h4 className="todo-title border border-purple-400 text-start p-1 ">{item.title}</h4>
            <p className="todo-desc  border border-purple-400 text-start  p-1">{item.desc}</p>
          </div>)
        

        })}


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
