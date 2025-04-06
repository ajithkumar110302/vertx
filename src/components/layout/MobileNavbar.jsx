import React from 'react'
import { mobileNavItems } from '../../utils/data'
import { NavLink } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 w-full h-16 bg-black z-30 flex justify-between items-center px-2 py-4 lg:hidden'>
     <ul className='flex justify-between items-center w-full'>
        { mobileNavItems.map((item, index) => (
            <li key={index} className='flex flex-col items-center'>
              <NavLink to={item.path} className='flex flex-col items-center'>
                <img src={item.icon} alt={item.label} className='w-6 h-6 mb-1 text-white' />
                <span className='text-white text-sm'>{item.label}</span>
              </NavLink>
            </li>
          ))
        }
      </ul> 
    </nav>
  )
}

export default MobileNavbar
