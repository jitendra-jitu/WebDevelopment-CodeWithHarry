import React from 'react'
import { useDispatch,useSelector } from 'react-redux'




const Navbar = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
      Navbar count- {count}
    </div>
  )
}

export default Navbar
