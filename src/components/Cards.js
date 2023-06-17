import React from 'react'
import './cards.css'

const Cards = ({imgSrc,text}) => {
  return (
    <div className='cardContainer'>
      <img src={imgSrc} alt='' className=''/>
      <h4 className='overImage'>{text}</h4>
      <h4 className='playHover'>Click To play</h4>
    </div>
  )
}

export default Cards
