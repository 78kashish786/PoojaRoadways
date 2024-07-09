import React from 'react'
import { NavLink } from 'react-router-dom'




const Header = () => {
  return (
    <div className='md:px-24  flex md:justify-around items-center border'>
      <img className='h-[105px]' src={require('../Assets/logo.png')} alt='logo'/>
      <ul className='flex gap-10 uppercase text-sm'>
        <li><NavLink to ='' activeClassName="text-red-100">Home</NavLink></li>
        <li><NavLink to ='/about'>About us</NavLink></li>
        <li><NavLink to ='/services'>Services</NavLink></li>
        <li><NavLink to ='/our-clients'>Our Clients</NavLink></li>
        <li><NavLink to ='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
