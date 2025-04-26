import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [name, setname] = useState("Delete and Enter your Name")
  // const [phoneNumber, setphoneNumber] = useState("xxxxxxxxxx")

  const [form, setform] = useState({userName:"Delete and Enter your Name",phoneNumber:"xxxxxxxxxx"})

  const handleClick = () => {
    alert('Click me  button!')
  }


  const handleMouseOver = () => {
    alert('Mouse Over me  button!')
  }

  // const nameChange=(e)=>{
  //   setname(e.target.value)
  // }

  // const phoneNumberChange=(e)=>{
  //   setphoneNumber(e.target.value)
  // }

  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>

        <h3>Hndling Buttons</h3>
        <button onClick={handleClick}>Click-Me!!</button>
        <div className='onMouseOver' onMouseOver={handleMouseOver}>OnMouseHover...</div>


        <br />
        <h3>Hndling Forms</h3>

        {/* <input type="text" name="name" value={form.name} onChange={nameChange}/><br />
        <input type="text" name="phone" value={form.phoneNumber} onChange={phoneNumberChange}/> */}

        <input type="text" name="userName" value={form.userName} onChange={handleChange}/><br />
        <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange}/>



    </>
  )
}

export default App
