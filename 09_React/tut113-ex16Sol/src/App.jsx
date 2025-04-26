import { useRef, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
 
  const api = useRef("https://jsonplaceholder.typicode.com/posts")
  const [posts, setposts] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api.current);
      const data = await response.json();
      setposts(data)
      console.log(data);
    }
    fetchData()
    
  }, [] )
  

  return (
    <>

    <div className='container'>
      
      {posts.map((card) => (
        <Card  id={card.id} userId={card.userId} title={card.title} body={card.body} />
      ))}

    </div>
    </>
    )
  }

  export default App


  