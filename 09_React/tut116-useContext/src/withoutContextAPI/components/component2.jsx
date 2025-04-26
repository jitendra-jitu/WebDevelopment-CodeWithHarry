import React from 'react'
import Component3 from './component3'

const component2 = ({count,setCount}) => {
  return (
    <div className='component' >
      <h3>component2</h3>
      <Component3 count={count} setCount={setCount} />
    </div>
  )
}

export default component2
