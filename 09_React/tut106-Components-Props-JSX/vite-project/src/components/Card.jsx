import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card' style={{backgroundColor:"pink"}}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.cardno}</p>
    </div>
  )
}

export default Card
