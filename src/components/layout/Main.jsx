import React from 'react'

const Main = ({ children }) => {
  return (
    <main className={`w-full h-full flex flex-col`}>
      {children}
    </main>
  )
}

export default Main
