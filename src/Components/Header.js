import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink, useLocation } from 'react-router-dom'
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5'

const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <header className='bg-white  shadow-md py-3 sticky top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <img className='w-[100px]' src={require('../Assets/logo.png')} />
          </div>
          <div className='hidden md:flex md:items-center'>
            <nav className='flex space-x-4 px-10 gap-10 font-light  text-xl py-10'>
              <NavLink
                to='/'
                exact
                activeClassName='text-red-700'
                className={
                  location.pathname === '/'
                    ? 'text-red-600 font-semibold'
                    : 'text-gray-800'
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                exact
                activeClassName='text-red-700'
                className={
                  location.pathname === '/about'
                    ? 'text-red-600 font-semibold '
                    : 'text-gray-800'
                }
              >
                About{' '}
              </NavLink>
              <NavLink
                to='/why-us'
                exact
                activeClassName='text-red-700'
                className={
                  location.pathname === '/why-us'
                    ? 'text-red-600 font-semibold '
                    : 'text-gray-800'
                }
              >
                Why us
              </NavLink>
              <NavLink
                to='/our-clients'
                exact
                activeClassName='text-red-700'
                className={
                  location.pathname === '/our-clients'
                    ? 'text-red-600 font-semibold '
                    : 'text-gray-800'
                }
              >
                Our Clients
              </NavLink>
              <NavLink
                to='/contact'
                exact
                activeClassName='text-red-700'
                className={
                  location.pathname === '/contact'
                    ? 'text-red-600 font-semibold '
                    : 'text-gray-800'
                }
              >
                Contact us
              </NavLink>
            </nav>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white focus:outline-none'
            >
              {isOpen ? (
                <IoCloseSharp size={35} className='text-red-600' />
              ) : (
                <IoMenuSharp size={35} className='text-red-600' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden ' data-aos='fade-down'>
          <nav className='h-[90vh] flex fixed top-2 w-full bg-white flex-col space-y-4 px-10 font-semibold  text-xl py-10'>
            <NavLink
              onClick={() => setIsOpen(false)}
              to='/'
              exact
              activeClassName='text-red-700'
              className={
                location.pathname === '/'
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-800'
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to='/about'
              exact
              activeClassName='text-red-700'
              className={
                location.pathname === '/about'
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-800'
              }
            >
              About{' '}
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to='/why-us'
              exact
              activeClassName='text-red-700'
              className={
                location.pathname === '/why-us'
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-800'
              }
            >
              Why us
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to='/our-clients'
              exact
              activeClassName='text-red-700'
              className={
                location.pathname === '/our-clients'
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-800'
              }
            >
              Our Clients
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to='/contact'
              exact
              activeClassName='text-red-700'
              className={
                location.pathname === '/contact'
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-800'
              }
            >
              Contact us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
