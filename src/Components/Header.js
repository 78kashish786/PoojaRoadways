import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='md:px-24  flex justify-around items-center border sticky top-0 bg-white z-50'>
      <img
        className='h-[105px]'
        src={require('../Assets/logo.png')}
        alt='logo'
      />
      <ul className='hidden md:flex gap-10 uppercase text-sm'>
        <li>
          <NavLink to='' activeClassName='text-red-100'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>About us</NavLink>
        </li>
        <li>
          <NavLink to='/why-us'>Services</NavLink>
        </li>
        <li>
          <NavLink to='/our-clients'>Our Clients</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      {/* <div></div> */}
      <div>
        <ul className='hidden flex gap-10 uppercase text-sm'>
          <li>
            <NavLink to='' activeClassName='text-red-100'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About us</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/our-clients'>Our Clients</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
