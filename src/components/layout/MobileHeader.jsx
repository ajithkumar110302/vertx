import React from 'react'
import Avatar from '../ui/Avatar'
import { profiles } from '../../utils/data'
import { NavLink } from 'react-router-dom'

const MobileHeader = () => {
  return (
    <header className='sticky top-0 left-0 right-0 z-30 w-full h-16 bg-black flex justify-between items-center px-2 py-4 lg:hidden'>
      <NavLink to="/profile/1">
        <Avatar image={profiles[0].avatar} showOnlineStatus={false}/>
      </NavLink>
      <NavLink to="/">
        <img src="/logo.svg" alt="logo" className='w-8 h-8 object-cover cursor-pointer'/>
      </NavLink>
      <button>
        <img src="/menu.svg" alt="menu_icon" className='w-6 h-6' />
      </button>
    </header>
  )
}

export default MobileHeader
