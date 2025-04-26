import React from 'react'
import { memo } from 'react'

const Navbar = ({ framework, getAdjective }) => {
  console.log("Navbar is rendered")
  return (
    <div>
      <h2>{framework}</h2>
      <button onClick={() => { getAdjective() }}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)