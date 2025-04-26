import React from 'react'

const component4 = ({count,setCount}) => {
  return (
    <div className='component' >
      <h3>component4</h3>
      <button onClick={()=>setCount((count)=>count+1)} >count is {count}</button>
    </div>
  )
}

export default component4
