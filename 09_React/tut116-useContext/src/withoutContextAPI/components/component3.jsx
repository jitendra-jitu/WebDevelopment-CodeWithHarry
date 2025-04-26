import React from 'react'
import Component4 from './component4'

const component3 = ({count,setCount}) => {
  return (
    <div className='component' >
      <h3>component3</h3>
      <Component4 count={count} setCount={setCount} />
    </div>
  )
}

export default component3
