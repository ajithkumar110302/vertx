import React from 'react'

const Overview = ({ children }) => {
  return (
    <div className='h-full bg-lightBlack p-4 md:py-10 md:px-12'>
      <h1 className='text-2xl font-bold mb-4'>Overview</h1>
      <section className='flex flex-col lg:grid lg:grid-cols-12 gap-4'>
        {children}
      </section>
    </div>
  )
}

export default Overview
