import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar logotext="LOGOTEXT-JITU--> props"/>
      <div className='count'> {count}</div>    
      <button className='clickme' onClick={()=>setCount(count+1)}>clickme</button>
      {/* <button className='clickme' onClick={()=>setCount(404)}>clickme</button> */}

      <Footbar/>
    </div>
  );
}

export default App;
