import React from 'react'
import { cn } from '../../utils/className';

const CardContainer = ({ children, Classname }) => {
  return (
    <div className={cn(`w-full h-full bg-black border border-customBorder rounded-lg p-4 ${Classname}`)}>
      {children}
    </div>
  )
}

export default CardContainer