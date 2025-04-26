import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <div className='cards' style={{backgroundColor:"whitesmoke"}} >

          <Card title="card1" description="this card specifies..." cardno="1001"/>
          <Card title="card2" description="this card specifies..." cardno="1002"/>
          <Card title="card3" description="this card specifies..." cardno="1003"/>
          <Card title="card4" description="this card specifies..." cardno="1004"/>
          <Card title="card5" description="this card specifies..." cardno="1005"/>
          <Card title="card6" description="this card specifies..." cardno="1006"/>
          <Card title="card7" description="this card specifies..." cardno="1007"/>
          <Card title="card8" description="this card specifies..." cardno="1008"/> 
          
        </div>
      <Footer/>
    </>
  )
}

export default App
