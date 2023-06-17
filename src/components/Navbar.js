import React from 'react'
import banner from '../images/banner.jpg'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='navBanner' src={banner} alt='banner'/>
      
    </div>
  )
}

export default Navbar
