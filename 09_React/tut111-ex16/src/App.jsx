import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {


  const [count, setCount] = useState(0)
  const first = useRef("")

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => setPosts(response))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <>
        <h1>Exercise-18</h1>
        <p>Converting <b>API - https://jsonplaceholder.typicode.com/posts</b>  data into cards</p>
        <br />

        <div className='container'>

        {posts.map((element, index) => (
          <Card key={index} title={element.title} body={element.body} userId={element.userId} className="card"/>
         
        ))}
        
      </div>
    </>
  )
}

export default App
