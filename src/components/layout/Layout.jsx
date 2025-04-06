import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header'
import MobileHeader from './MobileHeader'
import MobileNavbar from './MobileNavbar'

const Layout = ({ children }) => {
  return (
    <div className='lg:grid lg:grid-cols-12 w-full h-screen'>
      <div className='fixed top-0 hidden lg:block w-2/12 h-screen'>
        <Sidebar/>
      </div>
      <div className='lg:col-start-3 lg:col-span-10 flex flex-col w-full'>
        <MobileHeader />
        <Header />
        <MobileNavbar />
        <Main>
          {children}
        </Main>      
      </div>
    </div>
  )
}

export default Layout