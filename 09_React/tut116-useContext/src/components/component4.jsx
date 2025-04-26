import React from 'react'
import { CountContext } from '../context/context'

const component4 = () => {

    const { count,setCount} = React.useContext(CountContext)

  return (
    <div className='component' >
      <h3>component4</h3>
      <button onClick={() => setCount(()=>count+1)}>count is {count}</button>
    </div>
  )
}

export default component4
