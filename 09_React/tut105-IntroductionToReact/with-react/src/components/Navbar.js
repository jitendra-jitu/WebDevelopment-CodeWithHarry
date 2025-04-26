import React from 'react'

const Navbar = ({logotext}) => {
  return (
    <div className='nav'>
        <div >{logotext}</div>
      <ul >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Sign Up</li>
      </ul>
    </div>
  )
}

export default Navbar
