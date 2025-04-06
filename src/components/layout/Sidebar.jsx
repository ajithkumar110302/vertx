import React from 'react'
import ProfileList from '../Profile/ProfileList'
import Menu from '../Menu'

const Sidebar = () => {
  return (
    <aside className={`h-full border-r border-customBorder`}>
      {/* logo */}
      <div className='w-full flex items-center justify-between h-12 text-white px-2 border-b border-customBorder'>
        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-white'>
          <img src="/logo.svg" alt="vertx logo" className='w-5 h-5 rounded-full object-cover'/>
        </div>
        <h1 className='text-lg text-center font-medium mx-auto'>Vertxlabs, Inc</h1>
      </div>
      {/* avatars */}
      <div className='flex w-full h-[calc(100vh-3rem)] overflow-hidden'>
        <ProfileList />
        <div className='border-l border-customBorder'>
          <Menu />
        </div>
      </div>
      {/* add profile */}
      {/* links */}
    </aside>
  )
}

export default Sidebar
