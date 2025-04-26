import React from 'react'
import Component2 from './component2'

const component1 = ({count,setCount}) => {
  return (
    <div className='component' >
      <h3>component1</h3>
      <Component2 count={count} setCount={setCount}/>
    </div>
  )
}

export default component1
