import React from 'react'
import Component2 from './component2'

const component1 = () => {
  return (
    <div className='component' >
      <h3>component1</h3>
      {/* <Component2 count={count} setCount={setCount}/> */}
      <Component2 />
    </div>
  )
}

export default component1
